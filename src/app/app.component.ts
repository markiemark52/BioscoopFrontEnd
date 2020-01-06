import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.loggedIn = this.authService.isLoggedIn();
  }

  title = 'bioscoop';

  loggedIn: boolean = false;
  
  constructor(private router: Router, private authService: AuthService) {
    router.events.subscribe((val) => {
      this.loggedIn = this.authService.isLoggedIn();
    })
   }
}
