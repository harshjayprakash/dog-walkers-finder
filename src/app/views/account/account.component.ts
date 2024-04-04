import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { UsersService } from '../../core/services/storage/users.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrl: './account.component.css'
})
export class AccountComponent {
    userId?: string;
    username?: string;
    name?: string;
    postalCode?: string;
    dogWalker?: boolean;


    constructor(
        private auth: AuthService,
        private users: UsersService,
        private router: Router
    ) {
        auth.updateUser();
        this.userId = auth.getUserId();
    }

    updateUserInformation(): void {
        this.users.addUser(
            this.userId,
            this.username || 'not specified',
            this.postalCode || 'not specified',
            this.dogWalker || false,
            []
        );
    }

    logOut(): void {
        this.auth.logOutUser();
        this.auth.updateUser();
        this.router.navigateByUrl('/');
        window.location.reload();
    }

}
