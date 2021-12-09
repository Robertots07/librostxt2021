import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {AlertComponent} from './alert.component';
import {ToastModule} from 'ng-uikit-pro-standard';
import {MDBBootstrapModulesPro} from 'ng-uikit-pro-standard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ToastModule.forRoot(),
        MDBBootstrapModulesPro.forRoot(),
        BrowserAnimationsModule
      ],
      declarations: [AlertComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
