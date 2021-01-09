import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
import { DashboardComponent } from '../views/admin/dashboard/dashboard.component';
import { SettingsComponent } from '../views/admin/settings/settings.component';
import { TablesComponent } from '../views/admin/tables/tables.component';
import { MapsComponent } from '../../shared/maps/map-meta/maps.component';

const routes: Routes = [
  // admin views
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'maps', component: MapsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmniRoutingModule { }
