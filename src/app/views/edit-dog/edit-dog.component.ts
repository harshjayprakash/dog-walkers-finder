import { Component } from '@angular/core';

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
        private dogs: DogService
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

}
