import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conformation-page',
  templateUrl: './conformation-page.component.html',
  styleUrls: ['./conformation-page.component.css']
})
export class ConformationPageComponent implements OnInit {
  @Input() Mynum = 0;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateUrl(){
    this.router.navigate(['/employeelogin'])

  }
}
