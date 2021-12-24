import { Component, OnInit } from '@angular/core';
import {HotelFull} from "src/app/models/hotel";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "src/app/service/provider/data.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private dataService: DataService,
  ) { }

  hotel: HotelFull;

  ngOnInit(): void {
    const hotelId = this.router.snapshot.paramMap.get("hotel_id")
    this.hotel = this.dataService.getHotelById(hotelId);
  }

  onBookClick() {

  }
}
