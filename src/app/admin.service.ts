import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './shared/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private firestore: AngularFirestore
  ) {}

  // Check if user has admin role and is authenticated
  isAdmin(): boolean {
    const user = this.authService.userData;
    return user && user.emailVerified && user.roles && user.roles.admin;
  }

  // Sign out
  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }

  // Get orders
  getOrders(): Observable<any[]> {
    return this.firestore.collection('orders').valueChanges();
  }

  // Get revenue
  getRevenue(): Observable<number> {
    return this.firestore.collection('orders').valueChanges().pipe(
      map((orders: any[]) => {
        return orders.reduce((total: number, order: any) => {
          return total + order.totalPrice;
        }, 0);
      })
    );
  }
}
