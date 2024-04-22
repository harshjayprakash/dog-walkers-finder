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
        private auth: AuthService,
        private router: Router
    ) {
    }
}
