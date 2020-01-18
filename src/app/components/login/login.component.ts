import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { LoginUser } from '../../models/loginuser.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser: LoginUser = new LoginUser();
  loginResponse: LoginUser = new LoginUser();
  
  loginForm: FormGroup;

  constructor(private apiService: ApiService, private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.minLength(5)]],
      password: ['', [ Validators.required, Validators.minLength(5)]]
    });
  }

  login() {
    this.authService.login({
      email: this.loginUser.email,
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
