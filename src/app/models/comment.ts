export interface Comment {
  id: string;
  comment_time: Date;
  author: string;
  comment: string;
}

export interface HotelComment {
  hotel_id: string;
  comments: Comment[];
}
