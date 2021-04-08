import { Injectable } from '@angular/core';
import {Copy, Product} from '../productService/product-service.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private httpClient: HttpClient) { }

  public getOrderById(id: number): Observable<Order> {
    return this.httpClient.get<Order>('http://localhost:8080/customers/orders' + id);
  }

  public getAllOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>('http://localhost:8080/customers/orders');
  }
}

export interface Order {
  orderId: number;
  copies: Copy[];
  customerId: number;
  orderAcceptanceDate?: any;
  shippingDate?: any;
  orderFulfillmentDate?: any;
  paid: string;
  accepted: boolean;
  fulfill: boolean;
}
