import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SaleItem } from './sale-item.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }

  getSalesByMonth(): Observable<SaleItem[]> {
    return this.http.get<SaleItem[]>('api/sales/monthly');
  }
}
