import { HttpClient } from "@angular/common/http";
import { catchError, map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable, throwError } from "rxjs";
import { prods } from "./product.model";
import { cart, order, product } from "./sata-type";


@Injectable({
    providedIn :'root'
})
export class productsservice{
  item :any ;
  cartItems: any[] = [];
  cartData: any;
  constructor(private http:HttpClient) {}


  private apiUrl = 'http://localhost:8000/api/v1/prods';
   getProductDetails(productId: number): Observable<any> {
    return this.getallproducts()
    .pipe(
      map((products: prods[]) => products.find(p => p.productId === "id"))
    );
  return this.http.get(environment.baseApi+"id");
}




  getallproducts(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseApi).pipe(
      map(response => Array.isArray(response) ? response : [response])
    );
  }

    getallproduits() {
        return this.http.get(environment.baseApi);
           // .pipe(map(response => Array.isArray(response) ? response : [response]));
    }

    getproductbycategory(id: number) {
      return this.http.get<any[]>(environment.baseApi).pipe(
        map(products => products.map(product => `${environment.baseApi}/${product.id}`))
      );
      }

      // getProductById(prodId: number): Observable<any> {
      //   const url = `${this.apiUrl}/${prodId}`;
      //   return this.http.get<any>(url).pipe(
      //     catchError(error => {
      //       if (error.status === 404) {
      //         return throwError('Product not found');
      //       }
      //       return throwError('An error occurred while fetching the product');
      //     })
      //   );
      // }
      getProductsByCategory(id: number) {
        return this.http.get<any[]>(`${environment.baseApi}/${id}`);
      }
      getProductById(prodId: number): Observable<any> {
        const url = `${this.apiUrl}/${prodId}`;
        return this.http.get<any>(url).pipe(
          catchError(error => {
            if (error.status === 404) {
              return throwError('Product not found');
            }
            return throwError('An error occurred while fetching the product');
          })
        );
      }

      addProduct(data: product) {
        return this.http.post('http://localhost:3000/products', data);
      }
      productList() {
        return this.http.get<product[]>('http://localhost:3000/products');
      }

      deleteProduct(id: number) {
        return this.http.delete(`http://localhost:3000/products/${id}`);
      }

      getProduct(id: string) {
        return this.http.get<product>(`http://localhost:3000/products/${id}`);
      }

      updateProduct(product: product) {
        return this.http.put<product>(
          `http://localhost:3000/products/${product.id}`,
          product
        );
      }

      orderNow(data: order) {
          return this.http.post('http://localhost:3000/orders', data);
        }
        orderList() {
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          return this.http.get<order[]>('http://localhost:3000/orders?userId=' + userData.id);
        }

cancelOrder(orderId:number){
  return this.http.delete('http://localhost:3000/orders/'+orderId)

}
localAddToCart(data: product) {
  let cartData = [];
  let localCart = localStorage.getItem('localCart');
  if (!localCart) {
    localStorage.setItem('localCart', JSON.stringify([data]));
    this.cartData.emit([data]);
  } else {
    cartData = JSON.parse(localCart);
    cartData.push(data);
    localStorage.setItem('localCart', JSON.stringify(cartData));
    this.cartData.emit(cartData);
  }
}

removeItemFromCart(productId: number) {
  let cartData = localStorage.getItem('localCart');
  if (cartData) {
    let items: product[] = JSON.parse(cartData);
    items = items.filter((item: product) => productId !== item.id);
    localStorage.setItem('localCart', JSON.stringify(items));
    this.cartData.emit(items);
  }
}

addToCart(cartData: cart) {
  return this.http.post('http://localhost:3000/cart', cartData);
}
getCartList(userId: number) {
  return this.http
    .get<product[]>('http://localhost:3000/cart?userId=' + userId, {
      observe: 'response',
    })
    .subscribe((result) => {
      if (result && result.body) {
        this.cartData.emit(result.body);
      }
    });
}
removeToCart(cartId: number) {
  return this.http.delete('http://localhost:3000/cart/' + cartId);
}
currentCart() {
  let userStore = localStorage.getItem('user');
  let userData = userStore && JSON.parse(userStore);
  return this.http.get<cart[]>('http://localhost:3000/cart?userId=' + userData.id);
}



deleteCartItems(cartId: number) {
  return this.http.delete('http://localhost:3000/cart/' + cartId).subscribe((result) => {
    this.cartData.emit([]);
  })
}

}
