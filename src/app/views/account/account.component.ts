import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { type User } from '../../core/model/user';
import { AuthService } from '../../core/services/auth/auth.service';
import { UsersService } from '../../core/services/storage/users.service';

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
        private auth: AuthService, private users: UsersService, private router: Router
    ) {
        auth.updateUser();
        this.userId = auth.getUserId();
        this.users.getUsers().then(result => {
            const _users: User[] = result;
            _users.forEach(user => {
                if (user.id === this.userId) {
                    this.username = user.username;
                    this.name = user.name;
                    this.postalCode = user.address;
                    this.dogWalker = user.isDogWalker;
                }
            });
        }).catch(err => {
            console.log('[Account Component] Failed to retrieve users: ', err)
        });
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
