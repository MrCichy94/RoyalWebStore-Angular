import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Cart, CartServiceService} from '../../../../services/cartService/cart-service.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  cart: Cart[];

  constructor(private cartServiceService: CartServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.cartServiceService.getAllCarts().subscribe(value => {
      this.cart = value;
    });
  }

}
