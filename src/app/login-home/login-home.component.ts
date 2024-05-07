import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent {

  constructor(private router: Router) { }

  isHomePage(): boolean {
    return this.router.url === '/home';
  }
  
}
