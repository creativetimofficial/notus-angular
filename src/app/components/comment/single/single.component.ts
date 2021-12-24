import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HotelCommentService} from "src/app/service/comment/hotel-comment.service";
import {FormBuilder} from "@angular/forms";
import {HotelComment} from "src/app/models/comment";
import {HotelFull} from "src/app/models/hotel";
import {DataService} from "src/app/service/provider/data.service";

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  comments: HotelComment;
  hotel: HotelFull;

  constructor(
    private dataService: DataService,
    private router: ActivatedRoute,
    private hotelCommentService: HotelCommentService,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    const hotelId = this.router.snapshot.paramMap.get("hotel_id");
    this.hotel = this.dataService.getHotelById(hotelId);
    this.comments = this.hotelCommentService.getCommentsByHotelId(hotelId);
  }

  onCommentDeleteClick(commentId: string): void {
    const hotelId = this.router.snapshot.paramMap.get("hotel_id")
    this.hotelCommentService.removeCommentByIdHotelId(hotelId, commentId);
  }
}
