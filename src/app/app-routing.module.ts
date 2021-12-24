import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";

import { AboutUsComponent } from "./views/content/about-us/about-us.component";
import {ResultComponent} from "src/app/views/search/result/result.component";
import {SearchComponent} from "src/app/views/search/search.component";
import {HotelsComponent} from "src/app/components/lists/hotels/hotels.component";
import {HotelComponent} from "src/app/views/hotel/hotel.component";
import {NotFoundComponent} from "src/app/views/not-found/not-found.component";
import {AuthGuard} from "./auth-guard.service";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tables", component: TablesComponent },
      { path: "maps", component: MapsComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  {
    path: "content",
    children: [
      { path: "about-us", component: AboutUsComponent },
    ]
  },
  {
    path: "search",
    component: SearchComponent,
    children: [
      {
        path: ":query",
        // pathMatch: "full",
        component: ResultComponent,
      },
    ],
  },
  {
    path: "hotel",
    loadChildren: () => import('./modules/hotel/hotel.module').then(mod => mod.HotelModule)
  },
  // no layout views
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "landing", component: LandingComponent },
  { path: "404", component: NotFoundComponent },
  { path: "", component: LandingComponent },
  { path: "**", redirectTo: "/404", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
