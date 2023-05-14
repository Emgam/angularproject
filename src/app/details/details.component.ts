import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { prods } from '../product.model';
import { MenuComponent } from '../menu/menu.component';
import { productsservice } from '../products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


productId: number | undefined;
  product: any;

  constructor(private route: ActivatedRoute,private router: Router ,private productService: productsservice) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params[ 'id' ]; // Récupérer l'ID du produit depuis l'URL
      this.getProductDetails(this.productId);
    });
  }

  getProductDetails(prodId: number): void {
    this.productService.getProductById(prodId).subscribe(
      (res: any) => {
        this.product = res;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  addToCart(productId: number): void {
    this.productService.addToCart(this.product);
  }

  gotToCart(): void {
    this.router.navigate(['/cart']);
  }
}



