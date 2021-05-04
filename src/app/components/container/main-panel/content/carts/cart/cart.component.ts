import { Component, OnInit } from '@angular/core';
import {Cart, CartServiceService} from '../../../../../../services/cartService/cart-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart;

  constructor(private cartServiceService: CartServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const thisUserID = sessionStorage.getItem('thisUserID');
    console.log(thisUserID);
    this.cartServiceService.getCartByCustomerId(Number(thisUserID)).subscribe(value => {
      this.cart = value;
    });
  }

  removeFromCart(productId: number, copyId: number): void {
    this.cartServiceService.removeCopyWithGivenIdOfProductWithGivenIdFromCustomerCart(productId, copyId)
      .subscribe();
  }

}
