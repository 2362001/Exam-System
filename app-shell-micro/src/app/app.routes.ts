import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { LandingPageComponent } from './features/auth/landing-page/landing-page.component';

export const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: 'main',
  //   component: MainComponent,
  //   canActivate: [AuthGuard]
  // },
  {
    path: '**',
    redirectTo: 'main'
  }
];
