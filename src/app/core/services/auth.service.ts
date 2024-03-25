import { Injectable } from '@angular/core';
import { AuthUser, getCurrentUser } from 'aws-amplify/auth';

@Injectable()
export class AuthService {
    private user?: void | AuthUser;
    private loggedIn!: boolean;

    constructor() {
        this.loggedIn = false;
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }

    setLoggedIn(loggedIn: boolean): void {
        this.loggedIn = loggedIn;
    }

    updateUser() {
        getCurrentUser().then(result => {
            this.user = result;
            this.loggedIn = true;
        }).catch(err => {
            console.log('Failed to get authenticated user.');
            this.loggedIn = false;
        });
    }
}
