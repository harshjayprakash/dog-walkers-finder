import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cognito-auth',
    templateUrl: './cognito-auth.component.html',
    styleUrl: './cognito-auth.component.css'
})
export class CognitoAuthComponent {

    constructor(private router: Router) { }

    reload() {
        window.location.reload();
        this.router.navigateByUrl('/account');
    }

}
