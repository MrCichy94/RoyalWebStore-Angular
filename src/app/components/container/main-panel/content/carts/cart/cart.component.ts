import { Component, OnInit } from '@angular/core';
import {Cart, CartServiceService} from '../../../../../services/cartService/cart-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts: Cart[];

  constructor(private cartServiceService: CartServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cartServiceService.getAllCarts().subscribe(value => {
      this.carts = value;
    });
  }

}
