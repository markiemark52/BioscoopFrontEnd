import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { NewUser } from '../../models/newuser.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: NewUser = new NewUser();
  registerResponse: NewUser = new NewUser();

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit(registerform) {
    if (registerform.valid) {
      console.log("submitted");
      console.log(this.newUser.email)

      this.apiService.register(this.newUser).subscribe((data) => {
        this.registerResponse = new NewUser().deserialize(data);
        console.log(this.registerResponse);
        this.router.navigate(['/login']);
      });
    }
  }
}
