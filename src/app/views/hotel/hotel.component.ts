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
  private hotel: HotelFull;

  constructor(
    private router: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    const hotelId = this.router.snapshot.paramMap.get("hotel_id")
    this.hotel = this.dataService.getHotelById(hotelId);
  }
}
