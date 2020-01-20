import { Component, OnInit, Input } from '@angular/core';
import { Auditorium } from 'src/app/models/auditorium.model';

@Component({
  selector: 'app-auditorium',
  templateUrl: './auditorium.component.html',
  styleUrls: ['./auditorium.component.css']
})
export class AuditoriumComponent implements OnInit {
  @Input() auditorium: Auditorium;

  constructor() { }

  ngOnInit() {
  }

}
