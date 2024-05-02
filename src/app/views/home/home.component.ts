import { Component } from '@angular/core';
import { DistanceService } from '../../core/services/logic/distance.service';
import { DogService } from '../../core/services/storage/dog.service';
import { UsersService } from '../../core/services/storage/users.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

    constructor(
        private users: UsersService,
        private dogs: DogService,
        private distance: DistanceService
    ) {}

    onClick() {
        let ret = this.distance.isValidPostCode("so158qz")
            .subscribe(
                result => {

                },
                error => {

                }
            )
    }

}
