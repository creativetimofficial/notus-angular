import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "src/app/service/provider/data.service";
import {HotelFull} from "src/app/models/hotel";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  constructor(
  ) { }

  ngOnInit(): void {
  }
}
