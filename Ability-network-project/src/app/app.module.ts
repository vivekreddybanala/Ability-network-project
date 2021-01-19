import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';
import { ClientRegistrationPageComponent } from './client-registration/client-registration-page/client-registration-page.component';
import { CompanyDetailsComponent } from './client-registration/company-details/company-details.component';
import { BillingContactDetailsComponent } from './client-registration/billing-contact-details/billing-contact-details.component';
import { SupervisorDetailsComponent } from './client-registration/supervisor-details/supervisor-details.component';
import { PositionDetailsComponent } from './client-registration/position-details/position-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ConformationPageComponent } from './client-registration/conformation-page/conformation-page.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { ContractorloginComponent } from './contractorlogin/contractorlogin.component';
import { JoblistComponent } from './joblist/joblist.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientRegistrationComponent,
    ClientRegistrationPageComponent,
    CompanyDetailsComponent,
    BillingContactDetailsComponent,
    SupervisorDetailsComponent,
    PositionDetailsComponent,
    ConformationPageComponent,
    EmployeeloginComponent,
    ContractorloginComponent,
    JoblistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
