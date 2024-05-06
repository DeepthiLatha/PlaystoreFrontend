// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private baseUrl = 'http://localhost:3000/users'; 

//   constructor(private http: HttpClient) { }

//   registerUser(userData: any): Observable<any> {
//     return this.http.post<any>(`${this.baseUrl}/register`, userData);
//   }

//   findUser(username: string, password: string, role: string): Observable<any> {
//     const body = { username, password, role };
//     return this.http.post<any>(`${this.baseUrl}/findUser`, body);
//   }

// }




import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000/user'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }
}
