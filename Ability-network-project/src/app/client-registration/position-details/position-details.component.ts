import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ClientRegistrationService } from 'src/app/client-registration.service';
import { CompanyDetailsComponent } from '../company-details/company-details.component';

class companyDetails {
  address: string;
  city: string;
  zipCode: number;
  stateDepartment: string;
  stateDivision: string;
  constructor(address: string, city: string, zipCode: number, stateDepartment: string, stateDivision: string) {
    this.address = address;
    this.city = city;
    this.zipCode = zipCode;
    this.stateDepartment = stateDepartment;
    this.stateDivision = stateDivision;
  }

}

@Component({
  selector: 'app-position-details',
  templateUrl: './position-details.component.html',
  styleUrls: ['./position-details.component.css']
})
export class PositionDetailsComponent implements OnInit {
  @Input() companydetailsComponent: CompanyDetailsComponent;

  positionDetailsForm = new FormGroup({
    projectTitle: new FormControl('', Validators.required),
    hourlyWage: new FormControl('', Validators.required),
    schedule: new FormControl('', Validators.required),
    scheduledHours: new FormControl(''),
    shiftStartTime: new FormControl('', Validators.required),
    shiftEndTime: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl(''),
    jobDescription: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    zipCode: new FormControl('', [Validators.required, Validators.minLength(5)]),
    county: new FormControl('', Validators.required)
  });
  counties = [];

  projectTitles = [];

  constructor(private service:ClientRegistrationService) { }
  companyDetails: companyDetails = new companyDetails('', '', null, '', '');

  ngOnInit(): void {
    this.service.countyList().subscribe(data => {
      this.counties = data;
    });
    this.service.projectTitles().subscribe(data => {
      this.projectTitles = data;
    });
  }
  fillAdress(): void {
    this.positionDetailsForm.setValue({
      projectTitle: this.positionDetailsForm.value.projectTitle,
      hourlyWage: this.positionDetailsForm.value.hourlyWage,
      schedule: this.positionDetailsForm.value.schedule,
      scheduledHours: this.positionDetailsForm.value.scheduledHours,
      shiftStartTime: this.positionDetailsForm.value.shiftStartTime,
      shiftEndTime: this.positionDetailsForm.value.shiftEndTime,
      startDate: this.positionDetailsForm.value.startDate,
      endDate: this.positionDetailsForm.value.endDate,
      jobDescription: this.positionDetailsForm.value.jobDescription,
      address: this.companydetailsComponent?.companydetailsform.value.address,
      city: this.companydetailsComponent?.companydetailsform.value.city,
      zipCode: this.companydetailsComponent?.companydetailsform.value.zipCode,
      county: this.companydetailsComponent?.companydetailsform.value.county
    })
  }

}
