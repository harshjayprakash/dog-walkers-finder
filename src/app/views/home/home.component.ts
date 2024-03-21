import { Component } from '@angular/core';
import { DataService } from '../../core/services/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

    info?: any;

    constructor(private data: DataService) {}

    async getUsers() {
        this.info = await this.data.getUsers();
        this.data.AddUser();
    }

}
