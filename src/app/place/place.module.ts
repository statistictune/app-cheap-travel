import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { PlaceRoutes } from './place.routing';


@NgModule({
  declarations: [
    
  ],

  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule.forChild(PlaceRoutes),
  ],
})
export class PlaceModule { }
