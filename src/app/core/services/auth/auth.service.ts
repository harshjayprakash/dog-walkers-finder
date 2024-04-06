import { Injectable } from '@angular/core';
import { getCurrentUser, signOut } from 'aws-amplify/auth';

@Injectable()
export class AuthService {
    private user?: string;
    private loggedIn!: boolean;

    constructor() {
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
        }).catch(_err => { this.loggedIn = false; });
    }

    async logOutUser(): Promise<void> {
        try { await signOut(); }
        catch (err) { console.log('[Auth Service] Error Signing Out: ', err); }
    }
}
