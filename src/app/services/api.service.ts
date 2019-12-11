import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewFilm } from '../models/newfilm.model';
import { NewUser } from '../models/newuser.model';
import { LoginUser } from '../models/loginuser.model';

// @NgModule({
//   declarations: [ ApiService ],
//   imports: [ HttpClient ],
//   exports: [ ApiService ]
// })

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public addFilm(newFilm: NewFilm) {
    return this.httpClient.post<NewFilm>('http://localhost:9090/films/add', newFilm);
  }

  public getFilms() {
    return this.httpClient.get('http://localhost:9090/films/getall');
  }

  public register(newUser: NewUser) {
    return this.httpClient.post<NewUser>('http://localhost:9090/users/register', newUser);
  }

  public login(loginUser: LoginUser) {
    return this.httpClient.post<LoginUser>('http://localhost:9090/users/login', loginUser)
  }
}
