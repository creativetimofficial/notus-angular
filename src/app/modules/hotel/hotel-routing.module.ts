import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DetailComponent } from 'src/app/views/hotel/detail/detail.component';


const routes: Routes = [
  {
    path: ":hotel_id",
    component: DetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule {
}
