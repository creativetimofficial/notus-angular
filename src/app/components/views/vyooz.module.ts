import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VyoozRoutingModule } from './vyooz-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MapsComponent } from '../maps/map-meta/maps.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { TablesComponent } from './admin/tables/tables.component';
import { AuthModule } from '../auth/auth.module';
import { NavbarianModule } from '../omnipresent/navbars/navbarian.module';
import { CardzenModule } from '../cards/cardzen.module';
import { FooterrModule } from '../omnipresent/footers/footerr.module';
import { MappeModule } from '../maps/mappe.module';

const COMPS = [
  ProfileComponent,
  LandingComponent,
  IndexComponent,

  LoginComponent,
  RegisterComponent,

  DashboardComponent,
  MapsComponent,
  SettingsComponent,
  TablesComponent
]

@NgModule({
  declarations: [
    ...COMPS
  ],
  imports: [
    CommonModule,
    VyoozRoutingModule,
    AuthModule,
    NavbarianModule,
    CardzenModule,
    FooterrModule,
    MappeModule
  ],
  exports: [
    ...COMPS
  ]
})
export class VyoozModule { }
