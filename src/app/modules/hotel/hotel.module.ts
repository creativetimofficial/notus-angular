import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DetailComponent} from 'src/app/views/hotel/detail/detail.component';
import {HotelRoutingModule} from "./hotel-routing.module";
import {SingleComponent} from "src/app/components/comment/single/single.component";
import {CreateComponent} from "src/app/components/comment/create/create.component";
import {HotelComponent} from "src/app/views/hotel/hotel.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "src/app/modules/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    HotelRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
  ]
})
export class HotelModule {
}
