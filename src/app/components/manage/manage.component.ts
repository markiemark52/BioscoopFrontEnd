import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Film } from 'src/app/models/film.model';
import { Auditorium } from 'src/app/models/auditorium.model';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  dataArray;
  films = [];
  auditoriums = [];

  filmTitle: string;
  auditoriumName: string;
  datetime: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getFilms().subscribe((data) => {
      this.dataArray = data;

      this.dataArray.forEach(film => {
        this.films.push(new Film().deserialize(film));
      });

      this.apiService.getAuditoriums().subscribe((data) => {
        this.dataArray = data;
  
        this.dataArray.forEach(auditorium => {
          this.auditoriums.push(new Auditorium().deserialize(auditorium));
        });
      });
    });

    console.log(this.films);
    console.log(this.auditoriums);
  }

  onSubmit() {
    this.apiService.manage(this.filmTitle, this.auditoriumName, this.datetime)
    .subscribe(success => {
      if (success) {
        // this.router.navigate(['/profile']);
        alert("Success!");
      }
    });
  }
}