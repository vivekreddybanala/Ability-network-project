import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRegistrationPageComponent } from './client-registration-page.component';

describe('ClientRegistrationPageComponent', () => {
  let component: ClientRegistrationPageComponent;
  let fixture: ComponentFixture<ClientRegistrationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientRegistrationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
