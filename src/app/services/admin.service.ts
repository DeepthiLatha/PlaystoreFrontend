
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplicationService } from './application.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:3000/admin'; // URL according to backend

  constructor(private http: HttpClient, private applicationService: ApplicationService) { }

  loginAdmin(loginData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, loginData);
  }

  registerAdmin(registrationData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, registrationData);
  }
  
}

