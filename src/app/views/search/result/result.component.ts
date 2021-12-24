import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "src/app/service/provider/data.service";
import {Hotel} from "src/app/models/hotel";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  private hotels: Hotel[];

  constructor(
    private router: ActivatedRoute,
    private dataService: DataService,
    ) { }

  ngOnInit(): void {
    const query = this.router.snapshot.paramMap.get("query")
    this.listHotelsByQuery(query);
  }


  private listHotelsByQuery(query: string) {
    this.hotels = this.dataService.getHotelsByQuery(query);
  }
}
