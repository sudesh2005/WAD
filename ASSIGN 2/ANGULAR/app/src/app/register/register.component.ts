import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  user = { username: '', password: '' };

  constructor(private router: Router) {}

  register() {
    localStorage.setItem('user', JSON.stringify(this.user));
    alert('User Registered!');
    this.router.navigate(['/login']);
  }
}
