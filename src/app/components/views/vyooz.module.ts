import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthModule } from '../auth/auth.module';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { TablesComponent } from './admin/tables/tables.component';
import { IndexComponent } from './index/index.component';
import { LandingComponent } from './landing/landing.component';
import { OmniModule } from '../omnipresent/omni.module';
import { ProfileComponent } from './profile/profile.component';
import { VyoozRoutingModule } from './vyooz-routing.module';


const COMPS = [
  ProfileComponent,
  LandingComponent,
  IndexComponent,

  LoginComponent,
  RegisterComponent,

  DashboardComponent,

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
    SharedModule,
    OmniModule
  ],
  exports: [
    ...COMPS
  ]
})
export class VyoozModule { }
