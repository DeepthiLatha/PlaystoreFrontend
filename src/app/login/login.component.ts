import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData: any = { role: 'USER' }; // Default role is 'user'

  constructor(
    private router: Router,
    private userService: UserService,
    private adminService: AdminService
  ) { } 

  login(): void {
    if (this.loginData.role === 'USER') {
      this.userService.login(this.loginData).subscribe(
        response => {
          console.log('User login successful:', response);
          alert('User login successful.'); 
          // Redirect to category-nav component after successful login
          this.router.navigate(['/login-home']);
        },
        error => {
          console.error('User login failed:', error);
          alert('Invalid credentials.');
        }
      );
    } else if (this.loginData.role === 'ADMIN') {
      this.adminService.loginAdmin(this.loginData).subscribe(
        response => {
          console.log('Admin login successful:', response);
          alert('Admin login successful.');
          // Redirect to category-nav component after successful login
          this.router.navigate(['/admin-home']);
        },
        error => {
          console.error('Admin login failed:', error);
          alert('Invalid credentials.');
        }
      );
    }
  } 
}
