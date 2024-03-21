import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    private userId?: string;
    private loggedIn!: boolean;

    constructor() { }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }

    setLoggedIn(loggedIn: boolean): void {
        this.loggedIn = loggedIn;
    }

    getUserId(): string | undefined {
        return this.userId;
    }

    setUserId(userid?: string) {
        this.userId = userid;
    }
}
