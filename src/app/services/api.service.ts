import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

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
    return this.httpClient.get('http://localhost:9090/films/all');
  }

  public getFilmsByEmail(email: string) {
    return this.httpClient.get(`http://localhost:9090/films?email=${email}`);
  }

  public register(newUser: NewUser) {
    return this.httpClient.post<NewUser>('http://localhost:9090/users/register', newUser);
  }

  public login(loginUser: LoginUser) {
    return this.httpClient.post<LoginUser>('http://localhost:9090/users/login', loginUser)
  }

  public getAuditoriums() {
    return this.httpClient.get('http://localhost:9090/auditoriums/all');
  }

  public manage(filmTitle: string, auditoriumName: string, datetime: string) {
    console.log("filmTitle="+filmTitle+"auditoriumName="+auditoriumName+"datetime"+datetime);
    // return this.httpClient.get(`http://localhost:9090/auditoriums/manage?filmTitle=${filmTitle}?auditoriumName=${auditoriumName}?datetime=${datetime}`);
    const params = new HttpParams().set("filmTitle", filmTitle).set("auditoriumName", auditoriumName).set("datetime", datetime);
    return this.httpClient.get('http://localhost:9090/auditoriums/manage', {params});
  }

  public getFilmById(id: number) {
    return this.httpClient.get(`http://localhost:9090/films/id?id=${id}`);
  }

  public getShowtimesByFilmId(filmId: number) {
    return this.httpClient.get(`http://localhost:9090/auditoriums/showtimes?filmId=${filmId}`);
  }
}