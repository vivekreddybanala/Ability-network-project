import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorloginComponent } from './contractorlogin.component';

describe('ContractorloginComponent', () => {
  let component: ContractorloginComponent;
  let fixture: ComponentFixture<ContractorloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
