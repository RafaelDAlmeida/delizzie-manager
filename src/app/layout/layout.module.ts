import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../shared/modules/material/material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SigeluBreadcrumbsModule } from './components/sigelu-breadcrumbs/sigelu-breadcrumbs.module';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { Screen2Component } from './screen2/screen2.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MaterialModule,
        TranslateModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        SigeluBreadcrumbsModule
    ],
    declarations: [
        Screen2Component,
        LayoutComponent,
        TopnavComponent,
        SidebarComponent
    ]

})
export class LayoutModule { }
