import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Showtime } from 'src/app/models/showtime.model';
import { Auditorium } from 'src/app/models/auditorium.model';

@Component({
  selector: 'app-auditorium-details',
  templateUrl: './auditorium-details.component.html',
  styleUrls: ['./auditorium-details.component.css']
})
export class AuditoriumDetailsComponent implements OnInit {
  id: number;
  dataArray;
  auditoriums = [];
  showtimes = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.apiService.getAuditoriumById(this.id).subscribe((data) => {
      this.dataArray = data;
      console.log(this.dataArray);
      
      this.dataArray.forEach(auditorium => {
        this.auditoriums.push(new Auditorium().deserialize(auditorium));
      });

      this.apiService.getShowtimesByAuditoriumId(this.id).subscribe((data) => {
        this.dataArray = data;
        console.log(this.dataArray);

        this.dataArray.forEach(showtime => {
          this.showtimes.push(new Showtime().deserialize(showtime));
        })
      });
    });
  }
}
