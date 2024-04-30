import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  userData: any = {};

  constructor(private userService: UserService) { }

 
    // Define the submit handler as an arrow function
    handleSubmit = (event: Event) => {
      event.preventDefault(); // Prevent default form submission behavior
      console.log('submitted'); // Log "submitted" to the console
    };
  

  registerUser() {
    this.userService.registerUser(this.userData).subscribe(
      response => {
        // Handle successful registration response
        console.log('User registered successfully:', response);
      },
      error => {
        // Handle registration error
        console.error('Error registering user:', error);
      }
    );
  }
}
