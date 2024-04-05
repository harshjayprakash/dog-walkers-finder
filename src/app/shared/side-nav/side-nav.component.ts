import { Component, HostListener } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { StateService } from '../../core/services/ui/state.service';
import { VIEWS_MODULE_ROUTES } from '../../views/views.module';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
    routesList!: Routes;

    constructor(public state: StateService, private auth: AuthService) {
        this.routesList = VIEWS_MODULE_ROUTES.filter(
            (route) => route.title === 'Home'
                || route.title === 'Find Dog Walkers'
                || route.title === 'Manage Dogs'
        );
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any): void {
        if (event.target.innerWidth > 600) { this.state.showSideNav(); }
        else { this.state.hideSideNav(); }
    }

    onNavLinkClick(_event: any): void {
        if (window.innerWidth > 600) { return; }
        this.state.toggleSideNav();
    }

}
