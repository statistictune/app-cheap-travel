import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { HomeRoutes } from './home.routing';


@NgModule({
  declarations: [
    
  ],

  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule.forChild(HomeRoutes),
  ],
})
export class HomeModule { }
