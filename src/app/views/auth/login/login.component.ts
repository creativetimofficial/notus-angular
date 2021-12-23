import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { SignInModel } from 'src/app/models/auth';
import { AuthService } from "src/app/service/auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {

  signInForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    ) {}

  ngOnInit(): void {}
  onSignInSubmit(): void {
    const profile: SignInModel = {
      email: this.signInForm.get('email').value,
      password: this.signInForm.get('password').value,
    }
    // if (this.authService.authorize(profile)) {
      
    // }
  }
}
