import { Component, OnInit, Input } from '@angular/core';
import { Item } from "../item";
import { ProductsService } from "../products.service";
import { CartService } from "../cart.service";

import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() listItem: Item[]

  constructor(productService: ProductsService,
    private cartService: CartService,
    private router: ActivatedRoute) {

    productService.getAll().subscribe({
      next: (products) => {

        this.router.queryParamMap.subscribe({
          next: (queryParamMap: ParamMap) => {

            if (queryParamMap.has("category")) {

              const category = queryParamMap.get("category");

              this.listItem = products.filter((item) => {
                return item.category == category
              });

            }
            else {
              this.listItem = products;
            }

          }


        });
      }
    })


    // this.listItem = productService.itemList;
  }
  ngOnInit() {

    console.log("ProductListCom", "ngOnInit");
  }

  addToCart(item: Item) {
    this.cartService.addItem(item);
  }

}

