import { Component } from '@angular/core';
import { StateService } from '../../core/state.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

    constructor(
        private router: Router,
        private state: StateService) { }

    onAccountButtonClick(event: any): void {
        this.router.navigateByUrl('/account');
    }

    onMenuButtonClick(event: any): void {
        this.state.toggleSideNav();
    }

}
