import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dog-card',
    templateUrl: './dog-card.component.html',
    styleUrl: './dog-card.component.css'
})
export class DogCardComponent {

    @Input({ required: true }) name!: string;
    @Input({ required: true }) details!: string;
    @Input({ required: true }) contentid!: string;

    constructor(private router: Router) { }

    handleEditButton(_event: MouseEvent): void {
        this.router.navigate(['/dog', this.contentid])
    }

}
