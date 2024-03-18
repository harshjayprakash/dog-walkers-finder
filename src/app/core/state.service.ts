import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
    private displaySideNav!: boolean;

    constructor() {
        if (window.innerWidth < 600) {
            this.displaySideNav = false;
        }
        else {
            this.displaySideNav = true;
        }
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
