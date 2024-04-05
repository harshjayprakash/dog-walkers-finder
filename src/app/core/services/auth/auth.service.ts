import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getCurrentUser, signOut } from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';

@Injectable()
export class AuthService {
    private user?: string;
    private loggedIn!: boolean;

    constructor(private router: Router) {
        this.loggedIn = false;
        this.updateUser();
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }

    getUserId(): string | undefined {
        return this.user;
    }

    updateUser(): void {
        getCurrentUser().then(result => {
            this.user = result.userId;
            this.loggedIn = true;
        }).catch(err => {
            console.log('Failed to get authenticated user.');
            this.loggedIn = false;
        });
    }

    async logOutUser(): Promise<void> {
        try {
            await signOut();
        }
        catch (err) {
            console.log('[Auth Service] Error Signing Out: ', err);
        }
    }
}
