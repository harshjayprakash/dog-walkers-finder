import { AfterViewInit, Component } from '@angular/core';
import { User } from '../../core/model/user';
import { AuthService } from '../../core/services/auth/auth.service';
import { DistanceService } from '../../core/services/logic/distance.service';
import { UsersService } from '../../core/services/storage/users.service';

@Component({
    selector: 'app-find-walkers',
    templateUrl: './find-walkers.component.html',
    styleUrl: './find-walkers.component.css'
})
export class FindWalkersComponent implements AfterViewInit {
    searchDistance: number;
    currentPostalCode$: string = "";
    validCode!: boolean;
    postcodes: string[] = [];
    dogWalkersList$: User[] = [];
    noWalkersFound$!: boolean;

    constructor (
        public auth: AuthService,
        private distance: DistanceService,
        private users: UsersService
    ) {
        this.validCode = false;
        this.searchDistance = 0;
        this.noWalkersFound$ = false;
    }

    async ngAfterViewInit(): Promise<void> {
        await this.users.getUsers()
            .then(result => {
                const _users: User[] = result;
                const _currentid = this.auth.getUserId();
                _users.forEach(user => {
                    if (user.id === _currentid) {
                        this.currentPostalCode$ = user.address.toString();
                        this.distance.isValidPostCode(this.currentPostalCode$)
                        .then(result => {
                            if (result.result) {
                                this.validCode = true;
                            }
                        })
                        .catch(err => console.log("postcode error", err));
                    }
                })
            })
            .catch(error => {
                console.log('Failed to get user postal code.')
            })
        await this.distance.getPostCodeInformation(this.currentPostalCode$)
            .then(result => {
                this.currentPostalCode$ = result.result.postcode.toString();
                this.distance.getNearestPostCodes(
                    result.result.longitude || 0, result.result.latitude || 0,
                    this.searchDistance * 1609.344
                )
                .then(result => {
                    result.result.forEach(code => {
                        code.result.forEach(code2 => {
                            this.postcodes.push(code2.postcode);
                        })
                    })
                })
            })
            .catch(err => console.log(err));
    }

    async onSearchClick(): Promise<void> {

        this.dogWalkersList$ = await []

        await this.users.getUsers()
            .then(result => {
                let _users: User[] = result;
                _users.forEach(user => {
                    if (user.isDogWalker) {
                        this.postcodes.forEach(code => {
                            if (this.currentPostalCode$.toLowerCase() === code.toLowerCase()) {
                                this.dogWalkersList$.push(user);
                            }
                        })
                    }
                })
            })
            .catch(err => console.log(err));

        if (this.dogWalkersList$.length === 0) {
            this.noWalkersFound$ = true;
        }
        else {
            this.noWalkersFound$ = false;
        }
    }

}
