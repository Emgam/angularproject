import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from './order';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private firestore: AngularFirestore) { }

  getOrderHistory(userId: string): Observable<Order[]> {
    return this.firestore.collection('orders', ref => ref.where('userId', '==', userId))
      .snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Order;
          const Id = a.payload.doc.id;
          return { Id, ...data };
        }))
      );
  }

}
