import { Component, OnInit, Input } from '@angular/core';
import { Showtime } from 'src/app/models/showtime.model';

@Component({
  selector: 'app-ashowtime',
  templateUrl: './ashowtime.component.html',
  styleUrls: ['./ashowtime.component.css']
})
export class AshowtimeComponent implements OnInit {
  @Input() showtime: Showtime;

  constructor() { }

  ngOnInit() {
  }

}
