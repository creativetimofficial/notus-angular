export interface Hotel {
  id: string;
  city: string;
  name: string;
  desc: string;
  image: string;
}

export interface HotelFull {
  hotel: Hotel,
}
