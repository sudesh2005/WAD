import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  input = { username: '', password: '' };

  constructor(private router: Router) {}

  login() {
    const savedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (
      savedUser.username === this.input.username &&
      savedUser.password === this.input.password
    ) {
      alert('Login Successful!');
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/profile']);
    } else {
      alert('Invalid credentials!');
    }
  }
}
