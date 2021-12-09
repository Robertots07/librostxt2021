import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Form3Component } from './form3.component';
import { SharedModule } from '../../../shared/shared.module';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('Form3Component', () => {
  let component: Form3Component;
  let fixture: ComponentFixture<Form3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        MDBBootstrapModulesPro.forRoot(),
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ Form3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
