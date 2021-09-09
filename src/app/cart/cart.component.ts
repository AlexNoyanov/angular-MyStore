import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

import { FormBuilder } from '@angular/forms';     // For User data

 import { Product, products } from '../products'; // Products 
 //import {currency} from './shared/currency.pipe';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

// export class CartComponent  {

//   items = this.cartService.getItems();

//   constructor(
//     private cartService: CartService
//   ) { }

  export class CartComponent {

    items = this.cartService.getItems();

    checkoutForm = this.formBuilder.group({ // User's data checkout form
      name: '',
      address: ''
    });
  
    constructor(
      private cartService: CartService,
      private formBuilder: FormBuilder, // FormBuilder for user's info

    ) { }

    // Top clear the cart:
  

    clearTheCart():void {
      this.items = this.cartService.clearCart();
      console.warn('Your cart has been cleared!', this.checkoutForm.value);
      //this.checkoutForm.reset();
    }

      onSubmit(): void {  // To process user's form
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  

  ngOnInit() {
        // First get the product id from the current route.
  // const routeParams = this.route.snapshot.paramMap;
  // const productIdFromRoute = Number(routeParams.get('productId'));

  // // Find the product that correspond with the id provided in route.
  // this.product = products.find(product => product.id === productIdFromRoute);
  }

}