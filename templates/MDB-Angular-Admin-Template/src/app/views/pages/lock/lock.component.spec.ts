import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LockComponent } from './lock.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

describe('LockComponent', () => {
  let component: LockComponent;
  let fixture: ComponentFixture<LockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LockComponent ],
      imports: [MDBBootstrapModulesPro.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
