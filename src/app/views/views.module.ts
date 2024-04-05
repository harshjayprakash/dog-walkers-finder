import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCommonModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { FindWalkersComponent } from './find-walkers/find-walkers.component';
import { UsersService } from '../core/services/storage/users.service';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { authGuard } from '../core/guards/auth.guard';
import { DogService } from '../core/services/storage/dog.service';
import { ManageDogsComponent } from './manage-dogs/manage-dogs.component';
import { AddDogComponent } from './add-dog/add-dog.component';

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
        path: 'manage-dogs',
        title: 'Manage Dogs',
        component: ManageDogsComponent,
        canActivate: [authGuard]
    },
    {
        path: 'login',
        title: 'Log In',
        component: LoginComponent
    },
    {
        path: 'account',
        title: 'Account',
        component: AccountComponent,
        canActivate: [authGuard],
    }
];

@NgModule({
    declarations: [
        HomeComponent,
        FindWalkersComponent,
        LoginComponent,
        AccountComponent,
        ManageDogsComponent,
        AddDogComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(VIEWS_MODULE_ROUTES),
        FormsModule,
        MatCommonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatCheckboxModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        AmplifyAuthenticatorModule
    ],
    exports: [RouterModule],
    providers: [UsersService, DogService]
})
export class ViewsModule { }
