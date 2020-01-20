import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Film } from 'src/app/models/film.model';
import { Showtime } from 'src/app/models/showtime.model';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  id: number;
  dataArray;
  films = [];
  showtimes = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.apiService.getFilmById(this.id).subscribe((data) => {
      this.dataArray = data;
      console.log(this.dataArray);
      
      this.dataArray.forEach(film => {
        this.films.push(new Film().deserialize(film));
      });

      this.apiService.getShowtimesByFilmId(this.id).subscribe((data) => {
        this.dataArray = data;
        console.log(this.dataArray);

        this.dataArray.forEach(showtime => {
          this.showtimes.push(new Showtime().deserialize(showtime));
        })
      });
    });
  }
}
