import {Injectable} from '@angular/core';
import {Copy} from '../productService/product-service.service';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {AlertService} from '../authentication/alert.service';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private httpClient: HttpClient, private router: Router, private alertService: AlertService) {
  }

  public getOrderByCustomerId(id: number): Observable<Order[]> {
      const headers = new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
      });
    console.log(sessionStorage.getItem('access_token'));
    if (sessionStorage.getItem('access_token') != null) {
      console.log('Redirect for resource: ' + 'http://localhost:8080/customers/' + id + '/orders');
      return this.httpClient.get<Order[]>('http://localhost:8080/customers/' + id + '/orders', {headers: headers});
    } else {
      this.alertService.logginErrorAlert();
      this.router.navigate(['/login']);
    }
  }

  public getCustomersOrderById(customerId: number, orderId: number): Observable<Order> {
    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    });
    console.log(sessionStorage.getItem('access_token'));
    if (sessionStorage.getItem('access_token') != null) {
      console.log('Redirect for resource: ' + 'http://localhost:8080/customers/' + customerId + '/orders/' + orderId);
      return this.httpClient.get<Order>('http://localhost:8080/customers/' + customerId + '/orders/' + orderId, {headers: headers});
    } else {
      this.alertService.logginErrorAlert();
      this.router.navigate(['/login']);
    }
  }

  public getAllOrders(): Observable<Order[]> {
    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    });
    console.log(sessionStorage.getItem('access_token'));
    if (sessionStorage.getItem('access_token') != null) {
      console.log('Redirect for resource: ' + 'http://localhost:8080/customers/orders');
      return this.httpClient.get<Order[]>('http://localhost:8080/customers/orders', {headers: headers});
    } else {
      this.router.navigate(['/login']);
    }
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
