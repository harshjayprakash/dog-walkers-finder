import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from '../core/data.service';

export const VIEWS_MODULE_ROUTES: Routes = [
    {
        path: "",
        title: "Home",
        component: HomeComponent
    }
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(VIEWS_MODULE_ROUTES)
    ],
    exports: [RouterModule],
    providers: [DataService]
})
export class ViewsModule { }
