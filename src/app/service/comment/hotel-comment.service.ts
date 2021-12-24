import { Injectable } from '@angular/core';
import {HotelComment} from "../../models/comment";

@Injectable({
  providedIn: 'root'
})
export class HotelCommentService {
  private hotelComments: HotelComment[] = [
    {
      hotel_id: "1",
      comments: [{
        id: '1',
        comment: 'comment 1',
        comment_time: new Date(),
        author: 'Zhanel',
      },{
        id: '2',
        comment: 'comment 2',
        comment_time: new Date(),
        author: 'Zhanel',
      }]
    }, {
      hotel_id: "2",
      comments: [{
        id: '2',
        comment: 'comment 2',
        comment_time: new Date(),
        author: 'Zhanel1',
      }]
    }
  ];

  constructor() { }

  addCommentByHotelId(hotelId: string, comment: string): void {
    const hotelObj = this.hotelComments.find(hotel => hotel.hotel_id === hotelId);
    const comments = hotelObj.comments;
    comments.push(
    {
      id: `${comments.length}`,
      comment: `comment-${comments.length}: ${comment}`,
      comment_time: new Date(),
      author: 'Zhanel',
    }
    )

    this.hotelComments = [hotelObj,...this.hotelComments.filter(id=> id.hotel_id !== hotelId)]
  }

  removeCommentByIdHotelId(hotelId: string, commentId: string): void {
    const hotelObj = this.hotelComments.find(hotel => hotel.hotel_id === hotelId);
    hotelObj.comments = hotelObj.comments.filter(commentObj => commentObj.id !== commentId)
    this.hotelComments = [hotelObj,...this.hotelComments.filter(id=> id.hotel_id !== hotelId)]
  }

  getCommentsByHotelId(hotelId: string): HotelComment {
    const filtered = this.hotelComments.filter(hotelComment => hotelComment.hotel_id === hotelId);
    if (filtered.length > 0) {
      return filtered[0];
    }
    return null
  }
}
