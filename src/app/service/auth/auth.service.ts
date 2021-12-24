import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {SignInModel, SignUpModel} from "src/app/models/auth";
import {Error} from "src/app/models/error";
import {AuthStateEnum} from "./authEnum";

@Injectable({
  providedIn: `root`
})
export class AuthService {

  constructor(private router: Router) { }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authState');
  }

  isAdmin(): boolean {
    return localStorage.getItem('authState') === AuthStateEnum.ADMIN;
  }

  authorize(profile: SignInModel): Error {
    localStorage.setItem('authState',AuthStateEnum.AUTHORIZED);
    this.router.navigate(['/']);
    return null;
  }

  register(profile: SignUpModel): Error {
    localStorage.setItem('authState',AuthStateEnum.AUTHORIZED);
    this.router.navigate(['/']);
    return null;
  }
}
