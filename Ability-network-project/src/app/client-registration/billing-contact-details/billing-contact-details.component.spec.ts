import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingContactDetailsComponent } from './billing-contact-details.component';

describe('BillingContactDetailsComponent', () => {
  let component: BillingContactDetailsComponent;
  let fixture: ComponentFixture<BillingContactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingContactDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
