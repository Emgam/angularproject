import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { connect } from 'rxjs';
import { productsservice } from '../products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  products: any[] = [];
  categories: any[] = [];
  cartproducts: any[] = [];
  selectedCategory: string = 'all';
  productService: any;
  selectedItem: any;

  constructor(private service: productsservice, private router: Router) {
    this.productService = service;
  }
  ngOnInit(): void {

    this.getproduit();
    this.cartproducts = []; // initialize cart products with an empty array
  }


  getproduit() {
    this.service.getallproduits().subscribe((res: any) => {
      console.log("resesultat");
      console.log(res);
     this.products = res.prods ; // assign categories to this.categories
      console.log("this.procucts");
      console.log(this.products);
    });
  }





  getProductCategory(id: number) {
    const url = `http://127.0.0.1:8000/api/v1/prods/id`; // Construction de l'URL avec l'ID de la catégorie
    this.service.getProductsByCategory(+id).subscribe( // Utilisation de l'opérateur "+" pour convertir id en nombre
      (res: any[]) => {
        console.log(url); // Afficher l'URL dans la console
        console.log(res);
        this.categories = res;
        console.log(this.categories);
        console.log("prodsskinny jeans");
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  filterproduct(event: any) {

    console.log("hhh");
    console.log(event);
    let value = event.target.value;

    if (value) {
      this.getproduit();
      this.selectedItem = value; // Mettre à jour la valeur sélectionnée
    } else {
      console.error("Invalid category ID");
    }
    console.log(value)
  }



  onCategorySelect(value: number) {
    console.log(value)
    console.log("hgdsdfgh")

    this.service.getproductbycategory(value).subscribe((response: any) => {
      // Traitement des données de réponse ici
      console.log(response);

    });
  }




  goTodetails(id: number) {
    this.router.navigate(['/details/:id']);
  }

}
