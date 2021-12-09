import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Settings1Component } from './settings1.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

describe('Settings1Component', () => {
  let component: Settings1Component;
  let fixture: ComponentFixture<Settings1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        Settings1Component
      ],
      imports: [MDBBootstrapModulesPro.forRoot()],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Settings1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
