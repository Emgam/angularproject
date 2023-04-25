import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';




import { AngularFireAuth } from '@angular/fire/compat/auth';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { User } from '../shared/services/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: Observable<User | null> | undefined;


  orderHistory: Order[] = [];
  orderColumns: string[] = ['orderNumber', 'date', 'total', 'status'];

  constructor(public afAuth: AngularFireAuth, private orderService: OrderService) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.orderService.getOrderHistory(user.uid).subscribe((orders: Order[]) => {
          this.orderHistory = orders;
        });
      }
    });
  }

  ngOnInit(): void {
  }

}
