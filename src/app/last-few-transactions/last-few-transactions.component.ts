import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-few-transactions',
  templateUrl: './last-few-transactions.component.html',
  styleUrls: ['./last-few-transactions.component.css']
})
export class LastFewTransactionsComponent implements OnInit {

  transactions = [
    {
      id: 1,
      "name": "Skinny Jeans",
      "description": "A pair of stylish and comfortable skinny jeans in dark blue.",
      "price":" 49 DT" ,
      "image": "https://img.ltwebstatic.com/images3_pi/2023/04/13/1681356780f4a7a02c03521ef90b240478967358d6_thumbnail_405x552.webp",
      "category": "Trousers",
      "sizes": ["S", "M", "L"],
      "colors": ["Dark Blue", "Black"],
      "status": "pending"
    },
    {
      "id": 2,
      "name": "High Waisted Jeans",
      "description": "A pair of trendy high waisted jeans in light blue.",
      "price": "59 DT ",
      "image": "https://img.ltwebstatic.com/images3_pi/2021/10/30/16355795579e8715dfc6fb30b5bfa9e3fcfdc58250_thumbnail_405x552.webp",
      "category": "Trousers",
      "sizes": ["XS", "S", "M", "L", "XL"],
      "colors": ["Light Blue", "Black"],
      "status": "shipped"
    },
    {
      "id": 3,
      "name": "Cargo Pants",
      "description": "A pair of comfortable and practical cargo pants in olive green.",
      "price":" 69  DT",
      "image": "https://img.ltwebstatic.com/images3_pi/2021/11/09/163647132363274039b3864aa7bf16262c07f34c25_thumbnail_405x552.webp",
      "category": "Trousers",
      "sizes": ["S", "M", "L", "XL"],
      "colors": ["Olive Green", "Black"],
      "status": "confirmed"
    },
    {
      "id": 4,
      "name": "Floral Dress",
      "description": "A beautiful and elegant floral dress in pink and white.",
      "price": "79 DT",
      "image": "https://img.ltwebstatic.com/images3_pi/2021/12/07/1638868034c7477fd085e9d5ad2bbcfa4a2c72d125_thumbnail_405x552.webp",
      "category": "Dress",
      "sizes": ["S", "M", "L"],
      "colors": ["Pink and White"],
      "status": "confirmed"
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
