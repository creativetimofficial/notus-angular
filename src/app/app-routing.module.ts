import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from './views/admin/maps/maps.component';
import { SettingsComponent } from './views/admin/settings/settings.component';
import { TablesComponent } from './views/admin/tables/tables.component';

// auth views
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';

// no layouts views
import { IndexComponent } from './views/index/index.component';
import { LandingComponent } from './views/landing/landing.component';
import { ProfileComponent } from './views/profile/profile.component';

const routes: Routes = [
  // admin views
  {
    path: "/admin", component: AdminComponent, children: [
      { path: "/admin/dashboard", component: DashboardComponent },
      { path: "/admin/settings", component: SettingsComponent },
      { path: "/admin/tables", component: TablesComponent },
      { path: "/admin/maps", component: MapsComponent },
    ]},
    // auth views
    {
      path: "/auth", component: AuthComponent, children: [
        { path: "/auth/login", component: LoginComponent },
        { path: "/auth/register", component: RegisterComponent },
      ]},
      // no layout views
      { path: "profile", component: ProfileComponent },
      { path: "landing", component: LandingComponent },
      { path: "/", component: IndexComponent },
      { path: "/admin", redirectTo: "/admin/dashboard", pathMatch: "full" },
      { path: "/auth", redirectTo: "/auth/login", pathMatch: "full" },
      { path: "**", redirectTo: "/", pathMatch: "full" },
    ];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule],
    })
    export class AppRoutingModule {}
