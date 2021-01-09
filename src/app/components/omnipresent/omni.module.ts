import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IndexDropdownComponent } from './dropdowns/index-dropdown/index-dropdown.component';
import { NotificationDropdownComponent } from './dropdowns/notification-dropdown/notification-dropdown.component';
import { PagesDropdownComponent } from './dropdowns/pages-dropdown/pages-dropdown.component';
import { UserDropdownComponent } from './dropdowns/user-dropdown/user-dropdown.component';
import { FooterAdminComponent } from './footers/footer-admin/footer-admin.component';
import { FooterSmallComponent } from './footers/footer-small/footer-small.component';
import { FooterComponent } from './footers/footer/footer.component';
import { HeaderStatsComponent } from './headers/header-stats/header-stats.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { AdminNavbarComponent } from './navbars/admin-navbar/admin-navbar.component';
import { AuthNavbarComponent } from './navbars/auth-navbar/auth-navbar.component';
import { IndexNavbarComponent } from './navbars/index-navbar/index-navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableDropdownComponent } from './dropdowns/table-dropdown/table-dropdown.component';

const COMPS = [
  HeaderStatsComponent,
  SidebarComponent,

  IndexNavbarComponent,

  IndexDropdownComponent,
  NotificationDropdownComponent,
  PagesDropdownComponent,
  UserDropdownComponent,
  TableDropdownComponent,

  AdminComponent,
  AdminNavbarComponent,

  AuthComponent,
  AuthNavbarComponent,

  FooterAdminComponent,
  FooterComponent,
  FooterSmallComponent
]

@NgModule({
  declarations: [
    ...COMPS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPS
  ]
})
export class OmniModule { }
