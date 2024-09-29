import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { MainComponent } from './main/main.component';

export const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MainComponent,
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];
