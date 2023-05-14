import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { prods } from "../product.model";



@Injectable({
    providedIn :'root'
})
export class productsservice{
  item :any ;


   getProductDetails(productId: number): Observable<any> {
    return this.getallproducts()
    .pipe(
      map((products: prods[]) => products.find(p => p.productId === "id"))
    );
  return this.http.get(`/api/v1/prods/${productId}`);
}

    constructor(private http:HttpClient) {}


  getallproducts(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseApi).pipe(
      map(response => Array.isArray(response) ? response : [response])
    );
  }

    getallcategories() {
        return this.http.get(environment.baseApi);
           // .pipe(map(response => Array.isArray(response) ? response : [response]));
    }

    getproductbycategory(keyword:string) {
        return this.http.get(environment.baseApi+keyword)
            .pipe(map(response => Array.isArray(response) ? response : [response]));
    }

}
