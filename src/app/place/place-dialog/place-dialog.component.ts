import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { PostPlaceModel, PutPlaceModel } from '../models/place.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-place-dialog',
  templateUrl: './place-dialog.component.html',
  styleUrls: ['./place-dialog.component.scss'],
  imports: [DemoMaterialModule, ReactiveFormsModule],
  standalone: true,
})
export class PlaceDialogComponent implements OnInit {

  placeForm: FormGroup;
  isPostOperation: boolean = true
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<PlaceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {


    this.placeForm = this.fb.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      departure_date: ['', Validators.required],
      return_date: ['', Validators.required],
      min_value: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.isPostOperation = this.data.isPostOperation
    
    if (!this.isPostOperation) {
      this.placeForm.patchValue({
        origin: this.data.place.origin,
        destination: this.data.place.destination,
        departure_date: this.data.place.departure_date,
        return_date: this.data.place.return_date,
        min_value: this.data.place.min_value,
      });
    }

  }

  onSubmit() {
    if (this.placeForm.valid) {

      const formData = this.placeForm.value;

      if (!this.isPostOperation) {
        var dadosPut: PutPlaceModel = {
          id: this.data.place.id,
          user_id: this.data.place.user_id,
          min_value: formData.min_value
        }
        
        this.dialogRef.close(dadosPut);
        this.placeForm.reset();
      }
      else{
        var dadosPost: PostPlaceModel = {
          user_id: `${localStorage.getItem('user_id')}`,
          origin: formData.origin,
          destination: formData.destination,
          departure_date: formData.departure_date,
          return_date: formData.return_date,
          min_value: formData.min_value
        }
        
        this.dialogRef.close(dadosPost);
        this.placeForm.reset();
      }
    }
  }

}
