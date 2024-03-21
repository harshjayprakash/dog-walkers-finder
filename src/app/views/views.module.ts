import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCommonModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { DataService } from '../core/services/data.service';
import { FindWalkersComponent } from './find-walkers/find-walkers.component';
import { UsersService } from '../core/services/users.service';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

export const VIEWS_MODULE_ROUTES: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent
    },
    {
        path: 'find-walkers',
        title: 'Find Dog Walkers',
        component: FindWalkersComponent
    },
    {
        path: 'login',
        title: 'Log In',
        component: LoginComponent
    },
    {
        path: 'account',
        title: 'Account',
        component: AccountComponent
    }
];

@NgModule({
    declarations: [
        HomeComponent,
        FindWalkersComponent,
        LoginComponent,
        AccountComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(VIEWS_MODULE_ROUTES),
        MatCommonModule,
        MatIconModule,
        MatCardModule
    ],
    exports: [RouterModule],
    providers: [DataService, UsersService]
})
export class ViewsModule { }
