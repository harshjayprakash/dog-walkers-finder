import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { StateService } from '../core/services/state.service';
import { MatCommonModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ToolbarComponent,
        SideNavComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        CoreModule,
        MatCommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule
    ],
    exports: [ToolbarComponent, SideNavComponent],
    providers: [StateService]
})
export class SharedModule { }
