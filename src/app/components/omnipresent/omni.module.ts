import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from '../../layouts/admin/admin.component';
import { IndexDropdownComponent } from '../dropdowns/index-dropdown/index-dropdown.component';
import { FooterAdminComponent } from './footers/footer-admin/footer-admin.component';
import { FooterSmallComponent } from './footers/footer-small/footer-small.component';
import { FooterComponent } from './footers/footer/footer.component';
import { HeaderStatsComponent } from './headers/header-stats/header-stats.component';
import { AdminNavbarComponent } from './navbars/admin-navbar/admin-navbar.component';
import { AuthNavbarComponent } from './navbars/auth-navbar/auth-navbar.component';
import { IndexNavbarComponent } from './navbars/index-navbar/index-navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const COMPS = [
  HeaderStatsComponent,
  SidebarComponent,

  IndexNavbarComponent,
  IndexDropdownComponent,

  AdminComponent,
  AdminNavbarComponent,
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
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ...COMPS
  ]
})
export class OmniModule { }
