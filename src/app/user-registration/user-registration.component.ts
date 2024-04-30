import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  registrationMessage: string = ''; 

  onRegister() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const user = { username, password };
    localStorage.setItem('user', JSON.stringify(user));
    console.log('User registered:', user);
    this.registrationMessage = 'Registration successful'; 
  }
}
