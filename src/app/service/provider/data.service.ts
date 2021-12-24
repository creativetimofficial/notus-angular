import { Injectable } from '@angular/core';
import {Hotel, HotelFull} from "src/app/models/hotel";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private hotels = [
    {
      id: "1",
      name: "Hotel Duman",
      desc: "Featuring an indoor swimming pool, a spa, a bowling alley and a restaurant, this large hotel is centrally located in Astana. The 4-star Hotel Duman provides free private parking.",
      city: "Nur-Sultan",
      image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/118985615.webp?k=4abc7cd4798d8e7868c3374a2560a198abc72b8026fa9570816d2cd7042757ee&o=&s=1",
    }, {
      id: "2",
      name: "Hotel Duman",
      desc: "Featuring an indoor swimming pool, a spa, a bowling alley and a restaurant, this large hotel is centrally located in Astana. The 4-star Hotel Duman provides free private parking.",
      city: "Nur-Sultan",
      image: "https://t-cf.bstatic.com/xdata/images/hotel/square600/118985615.webp?k=4abc7cd4798d8e7868c3374a2560a198abc72b8026fa9570816d2cd7042757ee&o=&s=1",
    }
  ];

  constructor() { }

  getHotelsByQuery(query: string): Hotel[] {
    return this.hotels;
  }

  getHotelById(hotelId: string): HotelFull {
    const filtered = this.hotels.filter(hotel => hotel.id === hotelId);
    if (filtered.length >= 1) {
      return {
        hotel: filtered[0],
      }
    }
    return null
  }
}
