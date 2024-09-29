import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShareModule } from '../../shared/share.module';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [ShareModule, MaterialModule],
})
export class AuthModule {}
