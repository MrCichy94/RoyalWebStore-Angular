import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Order} from '../orderService/order-service.service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public getCartByCustomerId(id: number): Observable<Cart> {
    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    });
    console.log(sessionStorage.getItem('access_token'));
    if (sessionStorage.getItem('access_token') != null) {
      console.log('Redirect for resource: ' + 'http://localhost:8080/customers/' + id + '/cart');
      return this.httpClient.get<Cart>('http://localhost:8080/customers/' + id + '/cart', {headers: headers});
    } else {
      this.router.navigate(['/login']);
    }
  }

  public getAllCarts(): Observable<Cart[]> {
    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    });
    console.log(sessionStorage.getItem('access_token'));
    if (sessionStorage.getItem('access_token') != null) {
      console.log('Redirect for resource: ' + 'http://localhost:8080/customers/carts');
      return this.httpClient.get<Cart[]>('http://localhost:8080/customers/carts', {headers: headers});
    } else {
      this.router.navigate(['/login']);
    }
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

export interface CartItem {
  cartItemId: number;
  copy: Copy;
  totalPrice: number;
  quantity: number;
}

export interface Cart {
  cartId: string;
  cartItems: Map<number, CartItem>;
  grandTotal: number;
  customerId: number;
}


