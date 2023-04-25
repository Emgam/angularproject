import { Component } from '@angular/core';

@Component({
  selector: 'app-accountmana',
  templateUrl: './accountmana.component.html',
  styleUrls: ['./accountmana.component.css']
})
export class AccountmanaComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  language: string = '';
  name: string = ''; // Initialisez la propriété name ici

  save() {
    // Vous pouvez envoyer les informations de compte mises à jour à votre API backend ici
    console.log(`Username: ${this.username}, Email: ${this.email}, Password: ${this.password}, Confirm Password: ${this.confirmPassword}, Language: ${this.language}`);
  }
}
