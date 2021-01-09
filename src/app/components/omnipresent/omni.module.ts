import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CardzenModule } from './cards/cardzen.module';
import { HeaderStatsComponent } from './headers/header-stats/header-stats.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { OmniRoutingModule } from './omni-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';

const COMPS = [
  HeaderStatsComponent,
  SidebarComponent,
  AdminComponent,
  AuthComponent,
]

const MODS = [
  CardzenModule,
]

@NgModule({
  declarations: [
    ...COMPS
  ],
  imports: [
    CommonModule,
    OmniRoutingModule,
    SharedModule,
    ...MODS
  ],
  exports: [
    ...COMPS,
    ...MODS
  ]
})
export class OmniModule { }
