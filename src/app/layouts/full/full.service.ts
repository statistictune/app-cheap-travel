import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetUserModel, UserModel } from './models/user.model';


@Injectable({
  providedIn: 'root'
})
export class FullService {

  urlPlace = environment.apiPlace;
  
  constructor(private http: HttpClient) { }

  getUser(user: GetUserModel): Observable<any> {
    const url = `${this.urlPlace}/get_user/${user.id}`; // Substitua com sua URL de endpoint

    return this.http.get(url);

  }

}
