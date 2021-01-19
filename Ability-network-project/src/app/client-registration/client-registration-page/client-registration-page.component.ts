import { Component, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { BillingContactDetailsComponent } from '../billing-contact-details/billing-contact-details.component';
import { CompanyDetailsComponent } from '../company-details/company-details.component';
import { PositionDetailsComponent } from '../position-details/position-details.component';
import { SupervisorDetailsComponent } from '../supervisor-details/supervisor-details.component';

@Component({
  selector: 'app-client-registration-page',
  templateUrl: './client-registration-page.component.html',
  styleUrls: ['./client-registration-page.component.css']
})
export class ClientRegistrationPageComponent implements OnInit {
  @ViewChild('CompanyDetails') companyDetails: CompanyDetailsComponent;
  @ViewChild('BillingDetails') BillingDetails: BillingContactDetailsComponent;
  @ViewChild('PositionDetails') PositionDetails: PositionDetailsComponent;
  @ViewChild('SupervisorDetails') SupervisorDetails: SupervisorDetailsComponent;
  // @Output() formSubmitted = new EventEmitter<>();
  @Output() newItemEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  toggle(item) {
    if (item.style.display === 'none' || item.style.display === '') {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
  returnFormValid(): boolean {
    if (!this.companyDetails) {
      return true;
    }
    return this.companyDetails?.companydetailsform.status == "INVALID" || this.BillingDetails?.billingContactDetailsForm.status == "INVALID" || 
    this.PositionDetails?.positionDetailsForm.status == "INVALID" || this.SupervisorDetails.supervisorDetailsform.status == "INVALID" ;
  }
  submit(){
    this.newItemEvent.emit("000");
  }
}
