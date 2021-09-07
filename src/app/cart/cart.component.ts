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
  
    constructor(
      private cartService: CartService,

    ) { }
  

  ngOnInit() {
        // First get the product id from the current route.
  // const routeParams = this.route.snapshot.paramMap;
  // const productIdFromRoute = Number(routeParams.get('productId'));

  // // Find the product that correspond with the id provided in route.
  // this.product = products.find(product => product.id === productIdFromRoute);
  }

}