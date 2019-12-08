import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { LoginUser } from '../../models/loginuser.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser: LoginUser = new LoginUser();
  loginResponse: LoginUser = new LoginUser();

  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(loginform) {
    this.authService.login({
      username: this.loginUser.email,
      password: this.loginUser.password
    })
    .subscribe(success => {
      if (success) {
        this.router.navigate(['/profile']);
      }
    });
  }

  onSubmit(loginform) {
    if (loginform.valid) {
      console.log("submitted");

      this.apiService.login(this.loginUser).subscribe((data) => {
        this.loginResponse = new LoginUser().deserialize(data);
        console.log(this.loginResponse.email);

        if (this.loginResponse.email.length > 0) {
          document.location.href = "http://localhost:4200";
        } else {
          document.location.href = "http://localhost:4200/login";
        }
      })
    }
  }
}
