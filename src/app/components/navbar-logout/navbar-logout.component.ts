import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar-logout',
  templateUrl: './navbar-logout.component.html',
  styleUrls: ['./navbar-logout.component.css']
})
export class NavbarLogoutComponent implements OnInit {
  currentUser: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.getEmail();
  }

}
