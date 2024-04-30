import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}


  userRegistration(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/register`, user); 

  }

  findUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/login`, user); 
  }
  
}
