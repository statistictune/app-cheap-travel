import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChangeStatusPlaceModel, GetPlacesModel, PlaceModel } from './models/place.model';
import { PlaceService } from './place.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PlaceDialogComponent } from './place-dialog/place-dialog.component';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  isPostOperation = true;
  user_id: string = ''
  displayedColumns: string[] = [
    'datetime_register',
    'origin',
    'destination',
    'departure_date',
    'return_date',
    'min_value',
    'active',
    'menu'
  ];


  dataSource = new MatTableDataSource<PlaceModel>;

  constructor(private route: ActivatedRoute, private placeService: PlaceService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<PlaceModel>([]);
  }

  ngOnInit() {
    this.user_id = `${localStorage.getItem('user_id')}`
    var place: GetPlacesModel = { user_id: this.user_id }

    this.placeService.getPlaces(place);

    this.placeService.getData().subscribe((data: PlaceModel[]) => {
      // Atualize a fonte de dados com os novos dados
      this.dataSource.data = data;
    });
  }

  openMenu(element: PlaceModel, option: string) {
    // Lógica para lidar com as opções do menu
    if (option === 'Editar') {
      this.openDialog(false, element)
    } else if (option === 'Excluir') {
      // Implemente a lógica de exclusão aqui
    }
    else if (option === 'Status') {
      this.changeStatusPlace(element)
    }
  }

  changeStatusPlace(element: PlaceModel) {
    var changeStatus: ChangeStatusPlaceModel = {
      id: element.id,
      user_id: element.user_id,
      active: !element.active
    }
    this.placeService.changeStatusPlace(changeStatus)
  }

  adicionar() {

    this.isPostOperation = true;

    const dialogRef = this.dialog.open(PlaceDialogComponent, {
      width: '560px',

    });

    dialogRef.afterClosed().subscribe(result => {
      this.placeService.postPlace(result)
    });
  }

  openDialog(post: boolean, place?: PlaceModel): void {

    this.isPostOperation = post;

    const dialogRef = this.dialog.open(PlaceDialogComponent, {
      width: '560px',
      data: {
        place: place,
        isPostOperation: this.isPostOperation // Passa o valor aqui
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result != undefined)
        if(!this.isPostOperation)
          this.placeService.putPlace(result)
        else
          this.placeService.postPlace(result)
    });
  }


}
