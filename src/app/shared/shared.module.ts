import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
    declarations: [
        ToolbarComponent,
        SideNavComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
