import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionsComponent } from './sections.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import {StatsCard2Component} from '../dashboards/common/stats-card2/stats-card2.component';
import {StatsCardComponent} from '../dashboards/common/stats-card/stats-card.component';
import {AgmCoreModule} from '@agm/core';

describe('SectionsComponent', () => {
  let component: SectionsComponent;
  let fixture: ComponentFixture<SectionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionsComponent, StatsCard2Component, StatsCardComponent ],
      imports: [MDBBootstrapModulesPro.forRoot(), AgmCoreModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
