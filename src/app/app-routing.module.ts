import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
// no layouts views
import { IndexComponent } from './components/views/index/index.component';
import { LandingComponent } from './components/views/landing/landing.component';
import { ProfileComponent } from './components/views/profile/profile.component';

const routes: Routes = [

  // no layout views
  { path: 'login', component: LoginComponent },
  { path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule )},
  { path: 'o', loadChildren: () => import('./components/views/omnipresent/omni.module').then(m => m.OmniModule) },
  { path: 'admin', loadChildren: () => import('./components/views/omnipresent/omni.module').then(m => m.OmniModule) },
  { path: 'v', loadChildren: () => import('./components/views/vyooz.module').then(m => m.VyoozModule) },
  { path: 'profile', component: ProfileComponent },
  { path: 'i', component: IndexComponent },
  { path: '', component: LandingComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
