import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';
import { FilmComponent } from './components/film/film.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FilmformComponent } from './components/filmform/filmform.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarLoginComponent } from './components/navbar-login/navbar-login.component';
import { NavbarLogoutComponent } from './components/navbar-logout/navbar-logout.component';
import { ManageComponent } from './components/manage/manage.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { ShowtimeComponent } from './components/showtime/showtime.component';
import { AuditoriumDetailsComponent } from './components/auditorium-details/auditorium-details.component';
import { AuditoriumComponent } from './components/auditorium/auditorium.component';
import { AuditoriumsComponent } from './components/auditoriums/auditoriums.component';
import { AshowtimeComponent } from './components/ashowtime/ashowtime.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FilmformComponent,
    LogoutComponent,
    ProfileComponent,
    NavbarLoginComponent,
    NavbarLogoutComponent,
    ManageComponent,
    FilmDetailsComponent,
    ShowtimeComponent,
    AuditoriumDetailsComponent,
    AuditoriumComponent,
    AuditoriumsComponent,
    AshowtimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
