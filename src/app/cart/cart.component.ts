import { Component } from '@angular/core';
import { productsservice } from '../products.service';
import { Router } from '@angular/router';

import { connect } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems = [
    {
      "id": 1,
      "name": "Skinny Jeans",
      "description": "A pair of stylish and comfortable skinny jeans in dark blue.",
      "price": "49 DT",
      "image": "https://img.ltwebstatic.com/images3_pi/2023/04/13/1681356780f4a7a02c03521ef90b240478967358d6_thumbnail_405x552.webp",
      "category": "Trousers",
      "sizes": ["S", "M", "L"],
      "colors": ["Dark Blue", "Black"],
      "quantity": 2
    },
    {
      "id": 2,
      "name": "High Waisted Jeans",
      "description": "A pair of trendy high waisted jeans in light blue.",
      "price": "59 DT",
      "image": "https://img.ltwebstatic.com/images3_pi/2021/10/30/16355795579e8715dfc6fb30b5bfa9e3fcfdc58250_thumbnail_405x552.webp",
      "category": "Trousers",
      "sizes": ["XS", "S", "M", "L", "XL"],
      "colors": ["Light Blue", "Black"],
      "quantity": 1
    },
    {
      "id": 3,
      "name": "Cargo Pants",
      "description": "A pair of comfortable and practical cargo pants in olive green.",
      "price": "69 DT",
      "image": "https://img.ltwebstatic.com/images3_pi/2021/11/09/163647132363274039b3864aa7bf16262c07f34c25_thumbnail_405x552.webp",
      "category": "Trousers",
      "sizes": ["S", "M", "L", "XL"],
      "colors": ["Olive Green", "Black"],
      "quantity": 3
    },
  ];
  constructor(private router: Router ,private productService: productsservice) { }

  removeFromCart(product: any) {
    const index = this.cartItems.indexOf(product);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  parsePrice(price: string): number {
    return parseFloat(price.replace(/[^0-9.-]+/g, ''));
  }

  getSubtotal(product: any) {
    const price = this.parsePrice(product.price);
    return (price * product.quantity).toFixed(2);
  }

  getTotalItems() {
    let total = 0;
    for (const product of this.cartItems) {
      total += product.quantity;
    }
    return total;
  }

  getTotalPrice() {
    let total = 0;
    for (const product of this.cartItems) {
      const price = this.parsePrice(product.price);
      total += price * product.quantity;
    }
    return total.toFixed(2);
  }

    addToCart(productId: number) {
      this.productService.getProductById(productId).subscribe(productToAdd => {
        if (productToAdd) {
          const existingProduct = this.cartItems.find(product => product.id === productToAdd.id);

          if (existingProduct) {
            existingProduct.quantity++;
          } else {
            productToAdd.quantity = 1;
            this.cartItems.push(productToAdd);
          }
        }
      });
    }



  }
