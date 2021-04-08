import {Injectable} from '@angular/core';
import {CategoryAndManufacturer, Copy} from '../productService/product-service.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../orderService/order-service.service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private httpClient: HttpClient) {
  }

  public getCartById(id: number): Observable<Cart> {
    return this.httpClient.get<Cart>('http://localhost:8080/customers/carts' + id);
  }

  public getAllCarts(): Observable<Cart[]> {
    return this.httpClient.get<Cart[]>('http://localhost:8080/customers/carts');
  }
}

export interface Cart {
  productId: number;
  copies: Copy[];
  categoryAndManufacturer: CategoryAndManufacturer;
  productName: string;
  type: string;
  version: string;
  productDescription: string;
  sellBaseNetPrice: number;
  sellBaseGrossPrice: number;
  vatPercentage: number;
  vatValue: number;
}

