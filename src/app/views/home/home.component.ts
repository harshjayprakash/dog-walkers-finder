import { Component } from '@angular/core';
import { UsersService } from '../../core/services/users.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

    constructor(private users: UsersService) {}

}
