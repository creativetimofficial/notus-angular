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
  private hotel: HotelFull;
  private comments: HotelComment;

  commentForm = this.fb.group({
    comment: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private dataService: DataService,
    private hotelCommentService: HotelCommentService,
  ) { }

  ngOnInit(): void {
    const hotelId = this.router.snapshot.paramMap.get("hotel_id")
    this.hotel = this.dataService.getHotelById(hotelId);
    this.comments = this.hotelCommentService.getCommentsByHotelId(hotelId);
  }

  onCommentAddSubmit(): void {
    const comment = this.commentForm.get('comment').value;
    if (comment && comment !== '') {
      const hotelId = this.router.snapshot.paramMap.get("hotel_id")
      this.hotelCommentService.addCommentByHotelId(hotelId, this.commentForm.get('comment').value);
    }
  }

  onCommentDeleteClick(commentId: string): void {
    const hotelId = this.router.snapshot.paramMap.get("hotel_id")
    this.hotelCommentService.removeCommentByIdHotelId(hotelId, commentId);
  }
}
