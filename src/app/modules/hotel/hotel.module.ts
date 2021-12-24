import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetailComponent } from 'src/app/views/hotel/detail/detail.component';
import {HotelRoutingModule} from "./hotel-routing.module";

@NgModule({
  imports: [
    CommonModule,HotelRoutingModule
  ],
  declarations: [DetailComponent]
})
export class HotelModule { }
