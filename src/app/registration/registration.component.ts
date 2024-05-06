import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registrationData: any = { role: 'USER' }; // Default role is 'user'

  constructor(
    private router: Router,
    private userService: UserService,
    private adminService: AdminService
  ) { }

  register(): void {
    if (this.registrationData.role === 'USER') {
      this.userService.register(this.registrationData).subscribe(
        response => {
          console.log('User registered successfully:', response);
          alert('User registered successfully.');
          // Navigate to login component after successful registration
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Error registering user:', error);
          alert('Error registering user.');
        }
      );
    } else if (this.registrationData.role === 'ADMIN') {
      this.adminService.registerAdmin(this.registrationData).subscribe(
        response => {
          console.log('Admin registered successfully:', response);
          alert('Admin registered successfully.');
          // Navigate to login component after successful registration
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Error registering admin:', error);
          alert('Error registering admin.');
        }
      );
    }
  }
}
