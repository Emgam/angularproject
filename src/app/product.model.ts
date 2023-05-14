export class prods {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  sizes: string[];
  colors: string[];
imageUrl: any;
tags: any;
productId: any;
releaseDate: any;
starRating: any;

  constructor(id: number, name: string, description: string, price: string, image: string, category: string, sizes: string[], colors: string[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.category = category;
    this.sizes = sizes;
    this.colors = colors;
  }

}
