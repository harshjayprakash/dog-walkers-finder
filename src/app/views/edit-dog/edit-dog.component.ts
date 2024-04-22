import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Dog } from '../../core/model/dog';
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
        @Inject(LOCALE_ID) private locale: string,
        private dogs: DogService,
        private auth: AuthService
    ) {
        if (router.url === '/dog/add') {
            this.editMode = false;
        } else {
            this.editMode = true;
        }
    }

    cancelButtonClick(_event: MouseEvent): void {
        this.router.navigateByUrl('/dogs/manage');
    }

    updateButtonClick(_event: MouseEvent): void {
        if (this.editMode) { this.updateExistingDog(); }
        else { this.addNewDog(); }
    }

    addNewDog(): void {
        if (this.name === undefined) {
            alert('The name is required.');
        }

        this.id = formatDate(Date.now(), 'YYYYMMddTHHmmssSSS', this.locale.toString());

        const userId = this.auth.getUserId();
        if (userId === undefined) { return; }

        const dog: Dog = {
            id: this.id,
            userid: userId,
            name: this.name || 'undefined',
            details: this.details || 'No Details Provided',
            special: this.special || 'No Details Provided'
        };

        this.dogs.addDog(dog);
    }

    updateExistingDog(): void {

    }

}
