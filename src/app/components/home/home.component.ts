import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Film } from 'src/app/models/film.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
