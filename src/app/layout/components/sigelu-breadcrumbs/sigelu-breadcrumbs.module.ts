import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigeluBreadcrumbsComponent } from './sigelu.breadcrumbs';

@NgModule({
  declarations: [SigeluBreadcrumbsComponent],
  exports: [SigeluBreadcrumbsComponent],
  imports: [
    CommonModule
  ]
})
export class SigeluBreadcrumbsModule { }