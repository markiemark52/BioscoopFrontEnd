import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Auditorium } from 'src/app/models/auditorium.model';

@Component({
  selector: 'app-auditoriums',
  templateUrl: './auditoriums.component.html',
  styleUrls: ['./auditoriums.component.css']
})
export class AuditoriumsComponent implements OnInit {
  dataArray;
  auditoriums = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAuditoriums().subscribe((data) => {
      //console.log(data);
      this.dataArray = data;
      
      this.dataArray.forEach(auditorium => {
        this.auditoriums.push(new Auditorium().deserialize(auditorium));
        console.log(auditorium);
      });
    });

    console.log(this.auditoriums);
  }

}
