import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AuthNavbarComponent } from './auth-navbar/auth-navbar.component';
import { IndexNavbarComponent } from './index-navbar/index-navbar.component';

const COMPS = [
  AdminNavbarComponent,
  AuthNavbarComponent,
  IndexNavbarComponent
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
export class NavbarianModule { }
