import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private httpClient: HttpClient) {
  }

  public getAllCarts(): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>('http://localhost:8080/customers/carts');
  }
}

export interface Copy {
  copyId: number;
  productId: number;
  quantity: number;
  merchandisingCode: string;
  buyNetPrice: number;
  buyGrossPrice: number;
  buyVatPercentage: number;
  buyVatValue: number;
  sellCurrentNetPrice: number;
  sellCurrentGrossPrice: number;
  discountValue: number;
  percentageDiscountValue: number;
  buyDate: string;
  sellDate: string;
  alreadySold: boolean;
}

export interface Jedendwa {
  cartItemId: number;
  copy: Copy;
  totalPrice: number;
  quantity: number;
}

export interface Copy2 {
  copyId: number;
  productId: number;
  quantity: number;
  merchandisingCode: string;
  buyNetPrice: number;
  buyGrossPrice: number;
  buyVatPercentage: number;
  buyVatValue: number;
  sellCurrentNetPrice: number;
  sellCurrentGrossPrice: number;
  discountValue: number;
  percentageDiscountValue: number;
  buyDate: string;
  sellDate: string;
  alreadySold: boolean;
}

export interface Dwadwa {
  cartItemId: number;
  copy: Copy2;
  totalPrice: number;
  quantity: number;
}

export interface CartItems {
  1: Jedendwa;
  2: Dwadwa;
}

export interface Cart {
  cartId: string;
  cartItems: CartItems;
  grandTotal: number;
  customerId: number;
}


