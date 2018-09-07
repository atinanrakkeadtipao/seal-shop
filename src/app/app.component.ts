import { Component } from '@angular/core';
import { ProductsService } from "./products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seal-shop';
  

  listItem = [
    {
      id: "1",
      title: "Nike Airmax 97",
      category: "รองเท้า",
      price: 2900,
      imgURL: "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/mmx1zgznck7gm20glnvz/รองเท้าผู้-air-max-97-ultra-17-MkTmpwxD.jpg"
    },
    {
      id: "2",
      title: "Minion",
      category: "เสื้อ",
      price: 150,
      imgURL: "http://d126drxy0lew0u.cloudfront.net/catalog/product/large_image/69_404931.jpg"
    },
    {
      id: "3",
      title: "Nike Bag",
      category: "กระเป๋า",
      price: 7200,
      imgURL: "https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto/ty560nqkjj97iabpt7ne/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%9B%E0%B9%8B%E0%B8%B2-duffel-alpha-adapt-cross-body-7DXw78.jpg"
    }
  ];

  toggleCart = false;

  constructor(productService: ProductsService) {
    productService.itemList = this.listItem;

  }

  
  
}
