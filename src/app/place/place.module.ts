import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { PlaceRoutes } from './place.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogOverviewExampleDialogComponent } from '../material-component/dialog/dialog.component';


@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule.forChild(PlaceRoutes),
    DialogOverviewExampleDialogComponent,
    NgIf,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
})
export class PlaceModule { }
