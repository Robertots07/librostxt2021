import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Dashboard4Component } from './dashboard4.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

describe('Dashboard4Component', () => {
  let component: Dashboard4Component;
  let fixture: ComponentFixture<Dashboard4Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard4Component ],
      imports: [MDBBootstrapModulesPro.forRoot()],
      schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
