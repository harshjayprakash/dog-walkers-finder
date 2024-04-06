import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { StateService } from '../../core/services/ui/state.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

    constructor(
        private router: Router, private state: StateService, private auth: AuthService
    ) { }

    onAccountButtonClick(event: any): void {
        this.router.navigateByUrl('/account');
    }

    onMenuButtonClick(event: any): void {
        this.state.toggleSideNav();
    }

}
