import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Settings3Component } from './settings3.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

describe('Settings3Component', () => {
  let component: Settings3Component;
  let fixture: ComponentFixture<Settings3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Settings3Component ],
      imports: [MDBBootstrapModulesPro.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Settings3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
