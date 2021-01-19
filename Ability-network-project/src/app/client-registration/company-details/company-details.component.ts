import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientRegistrationService } from 'src/app/client-registration.service';

export class CompanyAddress {
  address: string;
  city: string;
  zipCode: number;
  county: string;
  constructor(address: string, city: string, zipCode: number, county: string) {
    this.address = address;
    this.city = city;
    this.zipCode = zipCode;
    this.county = county;
  }
}

class companyDetails {
  companyAddress: CompanyAddress;
  stateDepartment: string;
  stateDivision: string;

  constructor(stateDepartment: string, stateDivision: string, address: string, city: string, zipCode: number, county: string) {
    this.companyAddress = new CompanyAddress(address, city, zipCode, county);
    this.stateDepartment = stateDepartment;
    this.stateDivision = stateDivision;
  }

}

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  companydetailsform = new FormGroup({
    stateDivision: new FormControl('', Validators.required),
    stateDepartment: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    zipCode: new FormControl('', [Validators.required, Validators.minLength(5)]),
    county: new FormControl('', Validators.required)
  });
  counties = [
  ]

  constructor(private service: ClientRegistrationService) { }

  ngOnInit(): void {
    this.service.countyList().subscribe(data => {
      this.counties = data;
    });
  }

}
