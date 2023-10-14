import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiurl='http://localhost:3000'

  constructor(private http:HttpClient) { }

  registerUser(registrationData:any):Observable<any>{
    return this.http.post(`${this.apiurl}/register`,registrationData);
  }
}
