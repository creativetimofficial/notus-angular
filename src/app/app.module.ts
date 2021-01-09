import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// auth views
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
// layouts
import { CardzenModule } from './components/cards/cardzen.module';
import { MapsComponent } from './components/maps/map-meta/maps.component';
import { MappeModule } from './components/maps/mappe.module';
import { OmniModule } from './components/omnipresent/omni.module';
// admin views
import { DashboardComponent } from './components/views/admin/dashboard/dashboard.component';
import { SettingsComponent } from './components/views/admin/settings/settings.component';
import { TablesComponent } from './components/views/admin/tables/tables.component';
// no layouts views
import { IndexComponent } from './components/views/index/index.component';
import { LandingComponent } from './components/views/landing/landing.component';
import { ProfileComponent } from './components/views/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MapsComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    LandingComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    OmniModule,
    MappeModule,
    CardzenModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
