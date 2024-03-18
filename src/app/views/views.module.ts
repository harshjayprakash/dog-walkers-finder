import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

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
    exports: [RouterModule]
})
export class ViewsModule { }
