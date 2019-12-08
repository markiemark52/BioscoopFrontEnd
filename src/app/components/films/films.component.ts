import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { Film } from 'src/app/models/film.model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  dataArray;
  films = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getFilms().subscribe((data) => {
      //console.log(data);
      this.dataArray = data;
      
      this.dataArray.forEach(film => {
        this.films.push(new Film().deserialize(film));
      });
    })

    console.log(this.films);
  }

}
