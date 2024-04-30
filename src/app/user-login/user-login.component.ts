import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  username: string ='';
  password: string ='';

  constructor(private router: Router) { }

  onLogin() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    
    if (username === storedUser.username && password === storedUser.password) {
      console.log('Login successful');
    //  this.router.navigate(['/home']);

    } else {
      console.log('Login failed');
     
      const errorMsg = (document.getElementById('invalidCredMsg') as HTMLInputElement).style.display = "block";
    }
  }
  
}





