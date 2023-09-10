import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule.forChild(DashboardRoutes),
    DashboardComponent,
    NgApexchartsModule
  ]
})
export class DashboardModule { }
