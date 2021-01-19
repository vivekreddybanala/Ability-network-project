import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientRegistrationService } from 'src/app/client-registration.service';
import { CompanyAddress, CompanyDetailsComponent } from '../company-details/company-details.component';


@Component({
  selector: 'app-billing-contact-details',
  templateUrl: './billing-contact-details.component.html',
  styleUrls: ['./billing-contact-details.component.css']
})
export class BillingContactDetailsComponent implements OnInit {
  @Input() companydetailsComponent: CompanyDetailsComponent;
  billingContactDetailsForm = new FormGroup({
    contactName: new FormControl(''),
    phoneNumber: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    zipCode: new FormControl('', [Validators.required, Validators.minLength(5)]),
    county: new FormControl('', Validators.required)
  });
  counties = [];

  constructor(private service: ClientRegistrationService) { }

  ngOnInit(): void {
    this.service.countyList().subscribe(data => {
      this.counties = data;
    });
  }
  fillAdress(): void {
    this.billingContactDetailsForm.setValue({
      contactName: this.billingContactDetailsForm.value.contactName,
      phoneNumber: this.billingContactDetailsForm.value.phoneNumber,
      email: this.billingContactDetailsForm.value.email,
      address: this.companydetailsComponent?.companydetailsform.value?.address,
      city: this.companydetailsComponent?.companydetailsform.value?.city,
      zipCode: this.companydetailsComponent?.companydetailsform.value?.zipCode,
      county: this.companydetailsComponent?.companydetailsform.value?.county
    })
  }
}
