import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardzenModule } from '../cards/cardzen.module';
import { IndexDropdownComponent } from './dropdowns/index-dropdown/index-dropdown.component';
import { NotificationDropdownComponent } from './dropdowns/notification-dropdown/notification-dropdown.component';
import { PagesDropdownComponent } from './dropdowns/pages-dropdown/pages-dropdown.component';
import { TableDropdownComponent } from './dropdowns/table-dropdown/table-dropdown.component';
import { UserDropdownComponent } from './dropdowns/user-dropdown/user-dropdown.component';
import { FooterrModule } from './footers/footerr.module';
import { HeaderStatsComponent } from './headers/header-stats/header-stats.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { NavbarianModule } from './navbars/navbarian.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OmniRoutingModule } from './omni-routing.module';

const COMPS = [
  HeaderStatsComponent,
  SidebarComponent,

  IndexDropdownComponent,
  NotificationDropdownComponent,
  PagesDropdownComponent,
  UserDropdownComponent,
  TableDropdownComponent,

  AdminComponent,
  AuthComponent,
]

@NgModule({
  declarations: [
    ...COMPS
  ],
  imports: [
    CommonModule,
    OmniRoutingModule,
    CardzenModule,
    RouterModule,
    NavbarianModule,
    FooterrModule
  ],
  exports: [
    ...COMPS
  ]
})
export class OmniModule { }
