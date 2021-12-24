import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HotelCommentService} from "src/app/service/comment/hotel-comment.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  commentForm = this.fb.group({
    comment: ['', Validators.required],
  })

  constructor(private router: ActivatedRoute, private hotelCommentService: HotelCommentService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onCommentAddSubmit(): void {
    const comment = this.commentForm.get('comment').value;
    if (comment && comment !== '') {
      const hotelId = this.router.snapshot.paramMap.get("hotel_id");
      console.log(hotelId, comment);
      this.hotelCommentService.addCommentByHotelId(hotelId, comment);
    }
  }
}
