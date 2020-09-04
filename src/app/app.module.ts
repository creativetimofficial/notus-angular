import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { CardBarChartComponent } from "./components/cards/card-bar-chart/card-bar-chart.component";
import { CardLineChartComponent } from "./components/cards/card-line-chart/card-line-chart.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NotificationDropdownComponent } from "./components/dropdowns/notification-dropdown/notification-dropdown.component";
import { UserDropdownComponent } from "./components/dropdowns/user-dropdown/user-dropdown.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FooterComponent } from './components/footers/footer/footer.component';
import { FooterSmallComponent } from './components/footers/footer-small/footer-small.component';
import { FooterAdminComponent } from './components/footers/footer-admin/footer-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardBarChartComponent,
    CardLineChartComponent,
    NavbarComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
