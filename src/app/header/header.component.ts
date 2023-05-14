import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productsservice } from '../products.service';
import { product } from '../sata-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  menuType: string = 'default';
  userName:string="";
  searchResult:undefined|product[];
  cartItems=0;
  constructor(private route: Router, private product:productsservice) {}

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if(localStorage.getItem('user')){
        let userStore = localStorage.getItem('user');
        let userData = userStore && JSON.parse(userStore);
        this.userName= userData.name;
        this.menuType='user';
        this.product.getCartList(userData.id);
      }
       else {
        this.menuType = 'default';
      }
    });
    let cartData= localStorage.getItem('localCart');
    if(cartData){
      this.cartItems= JSON.parse(cartData).length
    }
    this.product.cartData.subscribe((items: string | any[])=>{
      this.cartItems= items.length
    })
  }

  userLogout(){
    localStorage.removeItem('user');
    this.route.navigate(['/signin'])
    this.product.cartData.emit([])
  }
  goToHome() {
    this.route.navigate(['/home']);
  }
  goToSignIn() {
    this.route.navigate(['/SignIn']);
  }

  goToLogin() {
    this.route.navigate(['/SignIn']);
  }
   goTosignup(){
    this.route.navigate(['/signin']);
   }

  goToContact() {
    this.route.navigate(['/contact']);
  }
  gotToCart () {
    this.route.navigate(['/cart']);

  }
  gotToMenu() {
    this.route.navigate(['/menu']);

  }

}
