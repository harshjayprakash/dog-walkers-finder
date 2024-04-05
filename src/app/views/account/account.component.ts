import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
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
        if (this.userId === undefined) { return; }
        const user: User = {
            id: this.userId?.toString(),
            username: this.username || 'not specified',
            name: this.name || 'not specified',
            address: this.postalCode || 'not specified',
            isDogWalker: this.dogWalker || false,
            dogs: []
        }
        this.users.addUser(user);
    }

    logOut(): void {
        this.auth.logOutUser();
        this.auth.updateUser();
        this.router.navigateByUrl('/');
        window.location.reload();
    }

}
