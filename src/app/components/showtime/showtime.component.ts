import { Component, OnInit, Input } from '@angular/core';
import { Showtime } from 'src/app/models/showtime.model';

@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.css']
})
export class ShowtimeComponent implements OnInit {
  @Input() showtime: Showtime;

  constructor() { }

  ngOnInit() {
  }

}
