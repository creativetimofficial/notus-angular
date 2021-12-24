import {Component, OnInit} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "src/app/service/auth/auth.service";
import {Router} from "@angular/router";
import {SignInModel, SignUpModel} from "src/app/models/auth";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  signUpForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  get registerFormControl() {
    return this.signUpForm.controls;
  }

  onSignInSubmit(): void {
    const profile: SignUpModel = {
      name: this.signUpForm.get('name').value,
      email: this.signUpForm.get('email').value,
      password: this.signUpForm.get('password').value,
    }
    if (!this.authService.register(profile)) {
      this.router.navigateByUrl("/landing");
    }
  }
}
