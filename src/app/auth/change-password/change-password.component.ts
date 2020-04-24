import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators, AbstractControl } from '@angular/forms';

import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  errorMessage: string;
  success: boolean;
  loading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8), ChangePasswordComponent.passwordComplexity]],
      repeatNewPassword: ['', [Validators.required]]
    }, { validators: [ChangePasswordComponent.sameNewPasswords, ChangePasswordComponent.samePasswords] });

    this.errorMessage = '';
    this.success = false;
    this.loading = false;
  }

  private static sameNewPasswords(control: FormGroup): ValidationErrors | null {
    const password = control.get('newPassword');
    const repeatedPassword = control.get('repeatNewPassword');
    return password && repeatedPassword && password.value === repeatedPassword.value ? null : { newPasswordsMatch: true };
  }

  private static samePasswords(control: FormGroup): ValidationErrors | null {
    const oldPassword = control.get('oldPassword');
    const password = control.get('newPassword');
    return password && oldPassword && password.value !== oldPassword.value  ? null : { samePassword: true };
  }

  private static passwordComplexity(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    const re = /\d+/;
    return re.test(password) ? null : { passwordComplexity: true };
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    this.loading = true;
    this.changePasswordForm.reset();
    this.loginService.changePassword(formData).subscribe(() => {
      this.success = true;
      this.errorMessage = '';
      this.loading = false;
    }, error => {
      this.success = false;
      this.errorMessage = error;
      this.loading = false;
    });
  }
}
