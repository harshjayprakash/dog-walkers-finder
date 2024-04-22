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

}
