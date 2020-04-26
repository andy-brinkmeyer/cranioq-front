import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  displayMessage: string;
  loading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.displayMessage = '';
    this.loading = false;
  }

  ngOnInit() {
  }

  onSubmit(loginData) {
    if (this.loginForm.valid) {
      this.loading = true;
      this.loginService.login(loginData).subscribe(message => {
        this.loading = false;
        this.displayMessage = message;
        this.loginForm.reset({
          email: loginData.email,
          password: ''
        });
      });
    } else {
      this.loading = false;
      this.displayMessage = 'One or more fields are empty.';
    }
  }
}
