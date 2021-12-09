import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HelpComponent } from './help.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import {PanelComponent} from '../../shared/components/panel/panel.component';
import {CascadingCardComponent} from '../../shared/components/cascading-card/cascading-card.component';

describe('HelpComponent', () => {
  let component: HelpComponent;
  let fixture: ComponentFixture<HelpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpComponent, PanelComponent, CascadingCardComponent ],
      imports: [MDBBootstrapModulesPro],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
