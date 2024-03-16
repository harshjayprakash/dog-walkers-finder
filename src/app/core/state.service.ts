import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
    private displaySideNav!: boolean;

    constructor() {
        this.displaySideNav = false;
    }

    isSideNavShown(): boolean {
        return this.displaySideNav;
    }

    hideSideNav(): void {
        this.displaySideNav = false;
    }

    showSideNav(): void {
        this.displaySideNav = true;
    }

    toggleSideNav(): void {
        this.displaySideNav = !this.displaySideNav;
    }
}
