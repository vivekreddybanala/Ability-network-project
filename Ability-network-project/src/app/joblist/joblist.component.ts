import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormGroup,  Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent implements OnInit{
 jobList: FormGroup;
 page = 1;
  pageSize = 10;
  collectionSize = JOBLIST.length;
  jobs: JobList[];
  closeResult = '';
  
  constructor( private formBuilder: FormBuilder, private modalService: NgbModal) { 
    this.refreshCountries();

  }
  refreshCountries() {
    this.jobs = JOBLIST
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit(): void {
    this.jobList = this.formBuilder.group({
      jobTypes: ['open jobs',Validators.required]
    })
  }
  // deleteJobs(job){
  //   const index=this.jobs.indexOf(job)
  //   this.jobs.splice(index,1);
  // }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
interface JobList {
  id?: number;
  positionTitle: string;
  supervisorName: string;
  stateDepartment: string;
  stateDivision: string;
  payRate:number;
}
const JOBLIST: JobList[] = [
  {
    positionTitle: 'Supply, Storage & Distribution Clerk II',
    supervisorName: 'Chris Cresslel',
    stateDepartment: 'DHSS',
    stateDivision: 'Social Services',
    payRate: 25.37
  },
  {
    positionTitle: 'Supply, Storage & Distribution Clerk II',
    supervisorName: 'Chris Cresslel',
    stateDepartment: 'DHSS',
    stateDivision: 'Social Services',
    payRate: 25.37
  }, {
    positionTitle: 'Supply, Storage & Distribution Clerk II',
    supervisorName: 'Chris Cresslel',
    stateDepartment: 'DHSS',
    stateDivision: 'Social Services',
    payRate: 25.37
  }, {
    positionTitle: 'Supply, Storage & Distribution Clerk II',
    supervisorName: 'Chris Cresslel',
    stateDepartment: 'DHSS',
    stateDivision: 'Social Services',
    payRate: 25.37
  }, {
    positionTitle: 'Supply, Storage & Distribution Clerk II',
    supervisorName: 'Chris Cresslel',
    stateDepartment: 'DHSS',
    stateDivision: 'Social Services',
    payRate: 25.37
  }, {
    positionTitle: 'Supply, Storage & Distribution Clerk II',
    supervisorName: 'Chris Cresslel',
    stateDepartment: 'DHSS',
    stateDivision: 'Social Services',
    payRate: 25.37
  }, {
    positionTitle: 'Supply, Storage & Distribution Clerk II',
    supervisorName: 'Chris Cresslel',
    stateDepartment: 'DHSS',
    stateDivision: 'Social Services',
    payRate: 25.37
  }, {
    positionTitle: 'Supply, Storage & Distribution Clerk II',
    supervisorName: 'Chris Cresslel',
    stateDepartment: 'DHSS',
    stateDivision: 'Social Services',
    payRate: 25.37
  }, {
    positionTitle: 'Supply, Storage & Distribution Clerk II',
    supervisorName: 'Chris Cresslel',
    stateDepartment: 'DHSS',
    stateDivision: 'Social Services',
    payRate: 25.37
  }, {
    positionTitle: 'Supply, Storage & Distribution Clerk II',
    supervisorName: 'Chris Cresslel',
    stateDepartment: 'DHSS',
    stateDivision: 'Social Services',
    payRate: 25.37
  }, {
    positionTitle: 'Supply, Storage & Distribution Clerk II',
    supervisorName: 'Chris Cresslel',
    stateDepartment: 'DHSS',
    stateDivision: 'Social Services',
    payRate: 25.37
  }, {
    positionTitle: 'Supply, Storage & Distribution Clerk II',
    supervisorName: 'Chris Cresslel',
    stateDepartment: 'DHSS',
    stateDivision: 'Social Services',
    payRate: 25.37
  }, {
    positionTitle: 'Supply, Storage & Distribution Clerk II',
    supervisorName: 'Chris Cresslel',
    stateDepartment: 'DHSS',
    stateDivision: 'Social Services',
    payRate: 25.37
  }, {
    positionTitle: 'Supply, Storage & Distribution Clerk II',
    supervisorName: 'Chris Cresslel',
    stateDepartment: 'DHSS',
    stateDivision: 'Social Services',
    payRate: 25.37
  }, {
    positionTitle: 'Supply, Storage & Distribution Clerk II',
    supervisorName: 'Chris Cresslel',
    stateDepartment: 'DHSS',
    stateDivision: 'Social Services',
    payRate: 25.37
  }
];

