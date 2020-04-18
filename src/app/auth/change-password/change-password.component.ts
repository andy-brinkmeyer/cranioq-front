import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  displayMessage: string;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8), ChangePasswordComponent.passwordComplexity]],
      repeatNewPassword: ['', [Validators.required]]
    }, { validators: [ChangePasswordComponent.sameNewPasswords, ChangePasswordComponent.samePasswords] });

    this.displayMessage = '';
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
    console.log(this.changePasswordForm.controls.newPassword.errors);
  }
}
