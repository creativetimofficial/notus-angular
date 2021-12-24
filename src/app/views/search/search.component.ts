import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {DataService} from "src/app/service/provider/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  onSearchQuery(query: string): void {
    this.router.navigateByUrl(`/search/${query}`);
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
