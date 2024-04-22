import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { AuthService } from '../core/services/auth/auth.service';
import { StateService } from '../core/services/ui/state.service';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DynamicCardComponent } from './dynamic-card/dynamic-card.component';

@NgModule({
    declarations: [
        ToolbarComponent,
        SideNavComponent,
        DynamicCardComponent
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
    providers: [StateService, AuthService]
})
export class SharedModule { }
