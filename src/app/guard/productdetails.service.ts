import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  addCart(product: any) {
    throw new Error('Method not implemented.');
  }
  removeCartItem(product: any) {
    throw new Error('Method not implemented.');
  }

  private apiBaseUrl = environment.baseApi;
  cartItemList: any;

  constructor(private http: HttpClient) { }

  getProducts() {
    const url = `${this.apiBaseUrl}products`;
    return this.http.get(environment.baseApi+'products/categories')
  }
  // Other methods for getting product categories, products by category, etc.
}
