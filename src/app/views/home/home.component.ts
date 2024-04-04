import { Component } from '@angular/core';
import { UsersService } from '../../core/services/storage/users.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

    constructor(private users: UsersService) {}

    onClick() {
        this.users.getUsers().then(result => {
            console.log(result);
        }).catch(err => console.log(err));
    }

}
