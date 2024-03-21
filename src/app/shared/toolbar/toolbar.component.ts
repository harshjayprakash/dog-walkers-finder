import { Component } from '@angular/core';
import { StateService } from '../../core/services/state.service';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

    constructor(
        private router: Router,
        private state: StateService,
        private auth: AuthService) { }

    onAccountButtonClick(event: any): void {
        this.router.navigateByUrl((this.auth.isLoggedIn()) ? '/account' : '/login')
    }

    onMenuButtonClick(event: any): void {
        this.state.toggleSideNav();
    }

}
