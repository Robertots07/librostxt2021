import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Profile2Component } from './profile2.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

describe('Profile2Component', () => {
  let component: Profile2Component;
  let fixture: ComponentFixture<Profile2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Profile2Component ],
      imports: [MDBBootstrapModulesPro.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Profile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
