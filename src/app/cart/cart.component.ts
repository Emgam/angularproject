import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(){
  }
  cartproducts:any[]=[];
  total:any=0
  ngOnInit():void {
this.getcartproducts()
  }
  getcartproducts()
  {
    if("cart" in localStorage)
    {
      this.cartproducts=JSON.parse(localStorage.getItem("cart")!)
    }
    console.log(this.cartproducts)
    this.getcarttotale()
  }
  getcarttotale(){
this.total=0
for(let x in this.cartproducts )
{
this.total+=this.cartproducts[x].item.price * this.cartproducts[x].quantity ;
}
  }

}
