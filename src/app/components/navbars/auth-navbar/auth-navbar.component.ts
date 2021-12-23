import { Component, OnInit } from "@angular/core";
import { AppComponent } from "src/app/components/base/AppComponent";

@Component({
  selector: "app-auth-navbar",
  templateUrl: "./auth-navbar.component.html",
})
export class AuthNavbarComponent extends AppComponent implements OnInit {
  navbarOpen = false;

  constructor() {
    super()
  }

  ngOnInit(): void {}

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}
