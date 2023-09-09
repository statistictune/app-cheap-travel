import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogUserModel } from './models/auth.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlUser = environment.apiUser;
  
  constructor(private http: HttpClient) { }

  logUser(user: LogUserModel): Observable<any> {

    const url = `${this.urlUser}/log_user/${user.email}/${user.id}`; // Substitua com sua URL de endpoint

    return this.http.get(url);





    // const url = 'http://127.0.0.1:5000/user/post_user'; // Substitua pela URL da sua API

    // const jsonData = {
    //   "name": "Gilene Gomes",
    //   "email": "gilene@gmail.com"
    // }

    // // Crie um objeto HttpParams com o user_id como parâmetro
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // return this.http.post(url, jsonData, { headers });
  }

}
