import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ShareModule } from '../shared/share.module';
import { ReactAppWrapperComponent } from '../wrappers/react-app-wrapper/react-app-wrapper.component';
import { MainComponent } from './main.component';
@NgModule({
  declarations: [ReactAppWrapperComponent,MainComponent],
  imports: [ShareModule, MaterialModule],
})
export class MainModule {}
