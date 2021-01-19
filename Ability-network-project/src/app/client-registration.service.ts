import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientRegistrationService {

  constructor(private _http: HttpClient) { }
  countyList(): Observable<string[]> {
    return this._http.get('assets/countyList.json') as Observable<string[]>;
  }
  projectTitles(): Observable<string[]> {
    return this._http.get('assets/projectTitles.json') as Observable<string[]>;
  }
}
