import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent implements OnInit {
  choice = 1;
  conformPage = false;
  submitNumber = 0;
  constructor() { }

  ngOnInit(): void {
  }
  next() {
    if (this.choice < 4) {
      this.choice++;

    } else {
      alert('submitted');
    }
  }
  previous() {
    this.choice--;
  }
  formsubmited(e) {
    this.submitNumber = e;
    this.conformPage = true;
  }

}
