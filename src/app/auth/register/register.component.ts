import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      email: '',
      password: '',
      repeatPassword: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(registerData) {
    this.registerForm.reset();
  }

}
