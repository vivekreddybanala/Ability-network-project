import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';
import { ContractorloginComponent } from './contractorlogin/contractorlogin.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { JoblistComponent } from './joblist/joblist.component';


const routes: Routes = [
  {path:'employeelogin', component: EmployeeloginComponent},
  {path:'contractorlogin', component: ContractorloginComponent},
  {path:'joblist', component: JoblistComponent},
  {path:'clientRegistration',component:ClientRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
