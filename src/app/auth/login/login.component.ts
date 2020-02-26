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

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.displayMessage = '';
  }

  ngOnInit() {
  }

  onSubmit(loginData) {
    if (this.loginForm.valid) {
      this.loginService.login(loginData).subscribe(message => this.displayMessage = message);
    }
  }
}
