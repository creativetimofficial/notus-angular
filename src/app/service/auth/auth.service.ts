import { Injectable } from '@angular/core';
import {SignInModel, SignUpModel} from "src/app/models/auth";
import {Error} from "src/app/models/error";

@Injectable({
  providedIn: `root`
})
export class AuthService {

  constructor() { }

  authorize(profile: SignInModel): Error {
    return null;
  }

  register(profile: SignUpModel): Error {
    return null;
  }
}
