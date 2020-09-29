import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer-admin",
  templateUrl: "./footer-admin.component.html",
})
export class FooterAdminComponent implements OnInit {
  date = new Date().getFullYear();
  constructor() {}

  ngOnInit(): void {}
}
