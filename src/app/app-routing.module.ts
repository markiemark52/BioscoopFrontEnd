import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmsComponent } from './components/films/films.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { ProfileGuard } from './auth/guards/profile.guard';
import { ManageComponent } from './components/manage/manage.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'login', component: LoginComponent},// canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [ProfileGuard], canLoad: [ProfileGuard] },
  { path: 'manage', component: ManageComponent },
  { path: 'film-details/:id', component: FilmDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
