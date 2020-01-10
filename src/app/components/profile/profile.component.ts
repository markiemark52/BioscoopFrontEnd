import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { Film } from 'src/app/models/film.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email: string;
  dataArray;
  films = [];

  constructor(private authService: AuthService, private apiService: ApiService) { }

  ngOnInit() {
    this.email = this.authService.getEmail();

    this.apiService.getFilmsByEmail(this.email).subscribe((data) => {
      this.dataArray = data;
      
      this.dataArray.forEach(film => {
        this.films.push(new Film().deserialize(film));
      });
    })

    console.log(this.films);
  }

}
