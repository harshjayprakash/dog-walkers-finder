import { Component, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { StateService } from '../../core/state.service';
import { Routes } from '@angular/router';
import { VIEWS_MODULE_ROUTES } from '../../views/views.module';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
    routesList!: Routes;

    constructor(public state: StateService) {
        this.routesList = VIEWS_MODULE_ROUTES;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any): void {
        if (event.target.innerWidth > 600) {
            this.state.showSideNav();
        }
        else {
            this.state.hideSideNav();
        }
    }

}
