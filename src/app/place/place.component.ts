import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChangeStatusPlaceModel, GetPlacesModel, PlaceModel} from './models/place.model';
import { PlaceService } from './place.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  id: string = ''
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

  constructor(private route: ActivatedRoute, private placeService: PlaceService) {
    this.route.params.subscribe(params => {
      this.id = `${+params['id']}`;
    });
    this.dataSource = new MatTableDataSource<PlaceModel>([]);
  }

  ngOnInit() {
    var place: GetPlacesModel = { user_id: this.id }

    this.placeService.getPlaces(place);

    this.placeService.getData().subscribe((data: PlaceModel[]) => {
      // Atualize a fonte de dados com os novos dados
      this.dataSource.data = data;
    });
  }

  openMenu(element: PlaceModel, option: string) {
    // Lógica para lidar com as opções do menu
    if (option === 'Editar') {
      // Implemente a lógica de edição aqui
    } else if (option === 'Excluir') {
      // Implemente a lógica de exclusão aqui
    }
    else if (option === 'Status') {
      this.changeStatusPlace(element)
    }
  }

  changeStatusPlace(element: PlaceModel){
    var changeStatus: ChangeStatusPlaceModel = {
      id: element.id,
      user_id: element.user_id, 
      active: !element.active
    }
    this.placeService.changeStatusPlace(changeStatus)
  }
}
