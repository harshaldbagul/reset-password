import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from "../../services/ValidationService"

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  userForm: FormGroup;
  formSubmitted = false;
  showValidation = false;

  constructor(
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      password: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          ValidationService.oneUppercaseCharacter,
          ValidationService.oneNumericCharacter,
        ])
      ],
      confirmPassword: ['', Validators.required]
    }, { validator: ValidationService.matchPassword });
  }


  resetPassword() {
    if (!this.userForm.invalid) {
      alert('Password reseted successfully!');
      this.userForm.reset();
      this.formSubmitted = false;
    } else {
      this.formSubmitted = true;
    }
  }

  get passwordControl(): AbstractControl {
    return this.userForm.get('password');
  }
  get confirmPasswordControl(): AbstractControl {
    return this.userForm.get('confirmPassword');
  }
}
