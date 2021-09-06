// Now that you've configured your application to retrieve shipping data, you can create a place to render that data.

//
//  Shipping component
//  To config parces shipping data and orders
//

import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';  // Cart Service for shipping

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(private cartService: CartService) { } // Injecting Cart 

  shippingCosts = this.cartService.getShippingPrices(); // Shipping cost prices

  ngOnInit() {
  }

}