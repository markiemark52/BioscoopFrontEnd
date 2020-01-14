import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApiService } from '../../services/api.service';
import { NewFilm } from '../../models/newfilm.model';
import { Film } from '../../models/film.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@NgModule ({
  imports: [ FormsModule, ReactiveFormsModule ]
})

@Component({
  selector: 'app-filmform',
  templateUrl: './filmform.component.html',
  styleUrls: ['./filmform.component.css']
})
export class FilmformComponent implements OnInit {
  newFilm: NewFilm = new NewFilm();
  filmResponse: NewFilm;

  constructor(private router: Router, private apiService: ApiService, private authService: AuthService) { }

  ngOnInit() {
    this.newFilm.email = this.authService.getEmail();
  }

  onSubmit(filmform) {
    if (filmform.valid) {
      console.log("Film submitted");
      console.log(this.newFilm);
      
      this.apiService.addFilm(this.newFilm).subscribe((data) => {
        this.filmResponse = new Film().deserialize(data);
        console.log(this.filmResponse.title);

        alert(`Film "${this.filmResponse.title}" submitted successfully!`);

        this.router.navigate(['/']);
      })
    }
  }
}
