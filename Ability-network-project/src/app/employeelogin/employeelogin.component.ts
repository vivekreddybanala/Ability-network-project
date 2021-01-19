import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {
  loginForm: FormGroup;
  isLoginFormValid: boolean;
  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  onSubmit(){
    console.log(this.loginForm.get('userName').value)
    console.log(this.loginForm.get('password').value)
    this.isLoginFormValid =false;
    if((this.loginForm.get('userName').value === "vikram") && (this.loginForm.get('password').value === "vikram")){
    this.router.navigate(['/joblist'])
      this.isLoginFormValid = false;
    }else{
      this.isLoginFormValid = true;
      this.router.navigate(['/joblist'])
     
    }
  }

}
