import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { AuthRoutes } from './auth.routing';


@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule.forChild(AuthRoutes)
  ],
})
export class AuthModule { }
