import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {DataService} from "src/app/service/provider/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Output() search = new EventEmitter<string>()

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
  ) { }

  searchForm = this.fb.group({
    query: [''],
  });

  ngOnInit(): void {
  }

  onSearchClick() {
    const query = this.searchForm.get('query').value;
    this.search.emit(query);
  }
}
