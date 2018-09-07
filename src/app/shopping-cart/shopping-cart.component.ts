import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cart';
import { FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { getUrlScheme } from '@angular/compiler';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: CartItem;
  cartItemKeys: string[];
  formGroup: FormGroup;
  amountArrayControl: FormArray;
  totalPrice: number;

  constructor(public cartService: CartService) {

    this.cartItems = cartService.getItem();
    // console.dir(this.cartItems);
    this.cartItemKeys = Object.keys(this.cartItems);
    // console.dir(this.cartItemKeys)

    this.amountArrayControl = new FormArray([], Validators.required);
    this.formGroup = new FormGroup({
      cartList: this.amountArrayControl
    });
    // this.amountInput = new FormControl([]);
    
    this.formGroup.valueChanges.subscribe({
      next: (data) => {
        // console.log("gvfdvfdvfd",data);
        this.totalPrice = data.cartList.reduce((total, amount, index) => {
          const itemId = this.cartItemKeys[index];
          const itemInCart = this.cartItems[itemId];
          return (amount * itemInCart.item.price) + total;

        }, 0);
      },
      error: (err) => { },
      complete: () => { }
      
    });
    this.cartItemKeys.forEach((cartItemKey) => {
      this.amountArrayControl.push(
        new FormControl(this.cartItems[cartItemKey].amount, [Validators.min(1), Validators.required])
      )
    });
   
  }

  

  ngOnInit() {
    
  }

  removeItem(itemId: string, index: number) {
    this.cartItemKeys.splice(index, 1);
    this.amountArrayControl.removeAt(index);
    delete this.cartItems[itemId];

    
  } 

}
