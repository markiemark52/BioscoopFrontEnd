import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.logout()) {
      console.log("yabbadabbadibdab")
      console.log(!!this.authService.getJwtToken())
      this.router.navigate(['/logout']);
    }
    else {
      this.router.navigate['/']
    }
  }
}
