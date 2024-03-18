import { Component } from '@angular/core';
import { DataService } from '../../core/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    constructor(private data: DataService) {}

}
