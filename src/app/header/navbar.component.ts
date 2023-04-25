import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }
  gotToCart () {
    this.router.navigate(['/cart']);

  }
  gotToMenu() {
    this.router.navigate(['/menu']);

  }
}
