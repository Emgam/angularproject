
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { BehaviorSubject } from 'rxjs';
import {Router}from '@angular/router' ;
import { login, signup } from './sata-type';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
isSellerLoggedin=new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient,private router:Router) { }
  usersignup(data:signup)
  {
    this.http.post ('http://localhost:3000/seller',data,
   {observe:'response'}).subscribe((result)=>{
    this.isSellerLoggedin.next(true);
    localStorage.setItem('seller',JSON.stringify(result.body))
    console.warn('result',result);
   }
   )
  }
  reloadSeller(){
    if(localStorage.getItem('seller'))
    {
      this.isSellerLoggedin.next(true);
    }
  }
  userlogin(data:login)
  {
console.warn(data)
this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
{observe:'response'}).subscribe((result:any)=>{
  console.warn(result)
  if(result && result.body.length)
  {
    console.warn("logged in successfully")
    this.router.navigate(['admin-home'])
  }else
  {
    console.warn("login failed ")
  }
}
)
}
}
