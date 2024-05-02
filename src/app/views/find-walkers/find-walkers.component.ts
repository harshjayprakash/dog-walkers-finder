import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { DistanceService } from '../../core/services/logic/distance.service';

@Component({
    selector: 'app-find-walkers',
    templateUrl: './find-walkers.component.html',
    styleUrl: './find-walkers.component.css'
})
export class FindWalkersComponent {

    constructor (
        public auth: AuthService,
        private distance: DistanceService
    ) {
    }

}
