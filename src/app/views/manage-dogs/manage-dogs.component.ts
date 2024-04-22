import { Component } from '@angular/core';
import { Dog } from '../../core/model/dog';
import { AuthService } from '../../core/services/auth/auth.service';
import { DogService } from '../../core/services/storage/dog.service';

@Component({
    selector: 'app-manage-dogs',
    templateUrl: './manage-dogs.component.html',
    styleUrl: './manage-dogs.component.css'
})
export class ManageDogsComponent {
    elementData!: Dog[];

    constructor(
        private dogs: DogService,
        private auth: AuthService
    ) {
        this.dogs.getDogs().then(result => {
            if (auth.getUserId() !== undefined) {
                let dogList: Dog[] = result;
                this.elementData = dogList.filter(
                    dog => dog.userid === this.auth.getUserId()
                );
            }
        }).catch(err => console.log('Failed to retrieve dogs: ', err))
    }
}
