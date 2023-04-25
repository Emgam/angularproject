import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
@Injectable(
    {
        providedIn :'root'
    })
    export class productsservice{
        constructor(private http:HttpClient) {}
        getallproducts()
        {
            return this.http.get(environment.baseApi+'products')
        }
        getallcategories()
        {
            return this.http.get(environment.baseApi+'products/categories')
        }
        getproductbycategory(keyword:string){
            return this.http.get(environment.baseApi+'products/category/'+keyword)
        }
 }
