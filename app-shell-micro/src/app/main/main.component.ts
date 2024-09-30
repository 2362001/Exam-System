import { Component, QueryList, ViewChildren } from '@angular/core';
import { AppService } from '../app.service';
import { loadRemoteModule } from '../utils/federation-utils';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  @ViewChildren('comp') components!: QueryList<any>;
  loaders: any = [];
  constructor(readonly appService: AppService) {}
  async ngAfterViewInit() {
    for (const m of this.appService.authorized_modules) {
      loadRemoteModule(m).then((module) => {

        if (module.default) {
          this.loaders.push(module.default);
        } else {
          this.loaders.push(module);
        }
      });
    }
  }
}
