import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bioscoop';


  loggedIn: boolean = false;
  
  constructor(private authService: AuthService) {
    this.loggedIn = this.authService.isLoggedIn();
   }
}
