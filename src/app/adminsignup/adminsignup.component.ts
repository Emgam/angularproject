import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../seller.service';
import { signup } from '../sata-type';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent {

  constructor(private seller:SellerService,private router:Router) {}
  showlogin=false ;
  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  signup(data:signup): void {
    console.warn(data)
    this.seller.usersignup(data)
  }
  login(data:signup):void{
    console.warn(data)
this.seller.userlogin(data)
  }
  openlogin()
  {
this.showlogin=true
  }
  opensignup()
  {
    this.showlogin=false
  }
}
