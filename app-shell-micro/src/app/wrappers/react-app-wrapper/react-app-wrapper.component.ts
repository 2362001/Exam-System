import { Component, ElementRef, Input } from '@angular/core';
import { createElement } from 'react';
import { Root, createRoot } from 'react-dom/client';

@Component({
  selector: 'app-react-wrapper',
  templateUrl: './react-app-wrapper.component.html',
  styleUrl: './react-app-wrapper.component.scss'
})
export class ReactAppWrapperComponent {
  @Input() component: any;
  root!: Root;

  constructor(private readonly host: ElementRef) {}

  ngAfterViewInit() {
    console.log(123);

    this.root = createRoot(this.host.nativeElement);
    this.root.render(createElement(this.component));
  }

  ngOnDestroy() {
    this.root.unmount()
  }
}
