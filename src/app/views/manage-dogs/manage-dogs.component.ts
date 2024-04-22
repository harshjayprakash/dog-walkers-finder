import { Component } from '@angular/core';

@Component({
    selector: 'app-manage-dogs',
    templateUrl: './manage-dogs.component.html',
    styleUrl: './manage-dogs.component.css'
})
export class ManageDogsComponent {
    elementData!: Dog[];
    constructor(
        private dogs: DogService,
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
