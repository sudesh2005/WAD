import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      alert('Please login first');
      this.router.navigate(['/login']);
    }
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }
}
