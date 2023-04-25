import { Component, OnInit } from '@angular/core';


import { SelectsComponent } from '../selects/selects.component';
import { Router } from '@angular/router';
import { productsservice } from '../guard/product.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


  products:any[] = [];
  categories:any []=[];
  cartproducts:any[]=[];

   constructor(private service:productsservice,private router: Router) { }
   goToDetails(id: number) {
    this.router.navigate(['/product', id]);
  }

   ngOnInit(): void {

   this.getproducts()
   this.getcategories()
 }

   getproducts() {
   this.service.getallproducts().subscribe((res:any) => {
     console.log(res)
     this.products = res})
   }


 getcategories() {

   this.service.getallcategories().subscribe((res:any) => {
     console.log(res)
     this.categories= res})
   }
   filtercategory(event:any) {
     let value = event.target.value;
     console.log(value)
     if(value=="all")
     this.getproducts()
     else {
     this.getproductcategory(value)}
   }
     getproductcategory(keyword:string)
      {
       this.service.getproductbycategory(keyword).subscribe((res:any) => {
 this.products=res })
       }
    addtocart(event : any){
     console.log(event)
     if("cart" in localStorage)
     {
       this.cartproducts=JSON.parse(localStorage.getItem("cart")!)
       let exist =this.cartproducts.find(item =>
         item.id==event.item.id)
         if(exist){
           alert("product is already in your cart")
         }else {
       this.cartproducts.push(event)
       localStorage.setItem("cart",JSON.stringify(this.cartproducts))
         }
     }else {
       this.cartproducts.push(event)
       localStorage.setItem("cart",JSON.stringify(this.cartproducts))
     }
    }
     }
