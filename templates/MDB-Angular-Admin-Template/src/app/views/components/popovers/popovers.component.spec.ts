import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PopoversComponent } from './popovers.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import {PanelComponent} from '../../../shared/components/panel/panel.component';

describe('PopoversComponent', () => {
  let component: PopoversComponent;
  let fixture: ComponentFixture<PopoversComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoversComponent, PanelComponent ],
      imports: [MDBBootstrapModulesPro.forRoot()],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
