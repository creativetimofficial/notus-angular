import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "src/app/service/provider/data.service";
import {HotelFull} from "src/app/models/hotel";
import {HotelCommentService} from 'src/app/service/comment/hotel-comment.service';
import {HotelComment} from "../../models/comment";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {


  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private dataService: DataService,
    private hotelCommentService: HotelCommentService,
  ) { }

  ngOnInit(): void {
  }
}
