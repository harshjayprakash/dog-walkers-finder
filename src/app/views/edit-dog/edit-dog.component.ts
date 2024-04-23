import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from '../../core/model/dog';
import { AuthService } from '../../core/services/auth/auth.service';
import { DogService } from '../../core/services/storage/dog.service';

@Component({
    selector: 'app-edit-dog',
    templateUrl: './edit-dog.component.html',
    styleUrl: './edit-dog.component.css'
})
export class EditDogComponent {
    editMode!: boolean;

    id?: string;
    name?: string;
    details?: string;
    special?: string;

    constructor(
        private router: Router,
        private activatedroute: ActivatedRoute,
        @Inject(LOCALE_ID) private locale: string,
        private dogs: DogService,
        private auth: AuthService
    ) {
        if (router.url === '/dog/add') {
            this.editMode = false;
        } else {
            this.editMode = true;
            this.activatedroute.params.forEach(params => {
                this.id = params['id']
            });
            this.dogs.getDogs().then(result => {
                const dogList: Dog[] = result;
                dogList.filter(dog => dog.id === this.id).forEach(dog => {
                    this.name = dog.name;
                    this.details = dog.details;
                    this.special = dog.special;
                });
            }).catch(error => console.log('Failed to retrieve dogs: ', error));
        }
    }

    goBack(): void {
        this.router.navigateByUrl('/dogs/manage');
    }

    updateButtonClick(_event: MouseEvent): void {
        if (this.editMode) { this.updateExistingDog(); }
        else { this.addNewDog(); }
    }

    removeButtonClick(_event: MouseEvent): void {
        const dog: Dog | undefined = this.getDogDetails();
        if (dog === undefined) { return; }
        this.dogs.removeDog(dog);
        this.goBack();
    }

    getDogDetails(): Dog | undefined  {
        if (this.id === undefined) { return; }
        const userId = this.auth.getUserId();
        if (userId === undefined) { return; }

        const dog: Dog = {
            id: this.id,
            userid: userId,
            name: this.name || 'undefined',
            details: this.details || 'No Details Provided',
            special: this.special || 'No Details Provided'
        };

        return dog;
    }

    addNewDog(): void {
        if (this.name === undefined) {
            alert('The name is required.');
        }

        this.id = formatDate(Date.now(), 'YYYYMMddTHHmmssSSS', this.locale.toString());

        const dog: Dog | undefined = this.getDogDetails();
        if (dog === undefined) { return; }

        this.dogs.addDog(dog);
        this.goBack();
    }

    updateExistingDog(): void {
        const dog: Dog | undefined = this.getDogDetails();
        if (dog === undefined) { return; }

        this.dogs.addDog(dog);
        this.goBack();
    }
}
