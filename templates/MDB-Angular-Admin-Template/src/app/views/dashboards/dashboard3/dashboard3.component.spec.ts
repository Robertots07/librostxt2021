import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Dashboard3Component } from './dashboard3.component';
import { StatsCardComponent } from '../common/stats-card/stats-card.component';
import { SharedModule } from '../../../shared/shared.module';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

describe('Dashboard3Component', () => {
  let component: Dashboard3Component;
  let fixture: ComponentFixture<Dashboard3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        MDBBootstrapModulesPro.forRoot()
      ],
      declarations: [
        Dashboard3Component,
        StatsCardComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
