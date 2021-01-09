import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AuthNavbarComponent } from './auth-navbar/auth-navbar.component';
import { IndexNavbarComponent } from './index-navbar/index-navbar.component';
import { RouterModule } from '@angular/router';
import { DropupModule } from '../dropdowns/dropup.module';

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
    CommonModule,
    RouterModule,
    DropupModule
  ],
  exports: [
    ...COMPS
  ]
})
export class NavbarianModule { }
