import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAppWrapperComponent } from './angular-app-wrapper.component';

describe('AngularAppWrapperComponent', () => {
  let component: AngularAppWrapperComponent;
  let fixture: ComponentFixture<AngularAppWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularAppWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularAppWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
