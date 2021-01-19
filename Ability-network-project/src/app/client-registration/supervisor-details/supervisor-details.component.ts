import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { zip } from 'rxjs';
import { CompanyAddress } from '../company-details/company-details.component';

class SupervisorDetails{
  name:string;
  phoneNumber:number;
  email:string;
  companyAddress:CompanyAddress;
  constructor(name:string,phoneNumber:number,email:string,
    address: string,
    city: string,
    zipCode: number,
    county: string
    ){
      this.name=name;
      this.phoneNumber=phoneNumber;
      this.email=email;
    this.companyAddress= new CompanyAddress(address,city,zipCode,county);
  }
}

@Component({
  selector: 'app-supervisor-details',
  templateUrl: './supervisor-details.component.html',
  styleUrls: ['./supervisor-details.component.css']
})
export class SupervisorDetailsComponent implements OnInit {

  supervisorDetailsform = new FormGroup({
    name:new FormControl('',Validators.required),
    phoneNumber:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email])
  })
  countries = [
    { field: '', value: null },
    { field: 'georgia', value: 'GA' },
    { field: 'ohio', value: 'OH' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
