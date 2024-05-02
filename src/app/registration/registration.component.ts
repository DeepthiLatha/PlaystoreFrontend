import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  userData: any = {};

  constructor(private userService: UserService) { }

     handleSubmit = (event: Event) => {
      event.preventDefault(); 
      console.log('submitted'); 
    };
  

  registerUser() {
    this.userService.registerUser(this.userData).subscribe(
      response => {
        console.log('User registered successfully:', response);
      },
      error => {
        console.error('Error registering user:', error);
      }
    );
  }
}
