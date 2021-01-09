import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IndexDropdownComponent } from './index-dropdown/index-dropdown.component';
import { NotificationDropdownComponent } from './notification-dropdown/notification-dropdown.component';
import { PagesDropdownComponent } from './pages-dropdown/pages-dropdown.component';
import { TableDropdownComponent } from './table-dropdown/table-dropdown.component';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';
import { RouterModule } from '@angular/router';

const COMPS = [
  IndexDropdownComponent,
  NotificationDropdownComponent,
  PagesDropdownComponent,
  TableDropdownComponent,
  UserDropdownComponent
]

@NgModule({
  declarations: [
    ...COMPS
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...COMPS
  ]
})
export class DropupModule { }
