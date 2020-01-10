import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { NewFilm } from '../../models/newfilm.model';
import { Film } from '../../models/film.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filmform',
  templateUrl: './filmform.component.html',
  styleUrls: ['./filmform.component.css']
})
export class FilmformComponent implements OnInit {
  newFilm: NewFilm = new NewFilm();
  filmResponse: NewFilm;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit(filmform) {
    if (filmform.valid) {
      console.log("Film submitted");
      console.log(this.newFilm);
      
      this.apiService.addFilm(this.newFilm).subscribe((data) => {
        this.filmResponse = new Film().deserialize(data);
        console.log(this.filmResponse.name);

        alert(`Film "${this.filmResponse.name}" submitted successfully!`);

        this.router.navigate(['/']);
      })
    }
  }
}
