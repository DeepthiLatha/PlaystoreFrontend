import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  userType: string = 'user'; 

  constructor(
    private router: Router,
    private adminService: AdminService,
    private userService: UserService
  ) { }

  adminLogin(): void {
    this.adminService.findAdmin(this.username, this.password, this.userType).subscribe(
      (admin) => {
     
        console.log('Admin logged in:', admin);
        alert('Admin logged in successfully');
        // Navigate to the home page
        // this.router.navigate(['/home']);
      },
      (error) => {
      
        console.error('Error logging in as admin:', error);
        alert('Failed to login as admin. Please check your credentials.');
      }
    );
  }

  userLogin(): void {
    this.userService.findUser(this.username, this.password, this.userType).subscribe(
      (user) => {
    
        console.log('User logged in:', user);
        alert('User logged in successfully');
        // Navigate to the home page
        // this.router.navigate(['/home']);
      },
      (error) => {
      
        console.error('Error logging in as user:', error);
        alert('Failed to login as user. Please check your credentials.');
      }
    );
  }
}
