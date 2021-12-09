import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImagesComponent } from './images.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import {PanelComponent} from '../../../shared/components/panel/panel.component';

describe('ImagesComponent', () => {
  let component: ImagesComponent;
  let fixture: ComponentFixture<ImagesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesComponent, PanelComponent ],
      imports: [MDBBootstrapModulesPro.forRoot()],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
