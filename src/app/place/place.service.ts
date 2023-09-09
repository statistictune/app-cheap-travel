import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChangeStatusPlaceModel, GetPlacesModel, PlaceModel } from './models/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  urlPlace = environment.apiPlace;

  private placesSubject: BehaviorSubject<PlaceModel[]> = new BehaviorSubject<PlaceModel[]>([]);

  constructor(private http: HttpClient) { }

  getData(): Observable<PlaceModel[]> {
    return this.placesSubject.asObservable(); // Retorna o BehaviorSubject como um Observable
  }

  getPlaces(place: GetPlacesModel): void {

    const url = `${this.urlPlace}/get_places/${place.user_id}`; // Substitua com sua URL de endpoint

    this.http.get<PlaceModel[]>(url).subscribe(data => {
      this.placesSubject.next(data); // Atualiza o BehaviorSubject com os dados recebidos
    });

  }

  changeStatusPlace(place: ChangeStatusPlaceModel){

    const url = `${this.urlPlace}/change_status_place`; // Substitua com sua URL de endpoint


    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Outros cabeçalhos personalizados, se necessário
    });

    this.http.put<ChangeStatusPlaceModel>(url, place, { headers }).subscribe(
      (response: ChangeStatusPlaceModel) => {
        // Atualiza o BehaviorSubject com os dados atualizados
        const updatedData = this.placesSubject.getValue();
        const index = updatedData.findIndex(item => item.id === response.id);

        if (index !== -1) {
          updatedData[index].active = response.active;
          this.placesSubject.next(updatedData);
        } else {
          console.error('Item não encontrado na matriz de dados.');
        }
      },
      (error) => {
        console.error('Erro ao fazer PUT:', error);
      }
    );

  }

}
