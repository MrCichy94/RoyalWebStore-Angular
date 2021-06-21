import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Order} from '../orderService/order-service.service';
import {User} from '../authentication/authentication.service';
import {Product} from '../productService/product-service.service';
import {Router} from '@angular/router';
import {AlertService} from '../authentication/alert.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              private router: Router,
              private alertService: AlertService) { }

  register(request: string) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });
    return this.http.post('http://localhost:8080/customers/add', request, {headers: headers});
  }

  getCustomerByUsername(user: User) {
    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    });
    console.log(sessionStorage.getItem('access_token'));
    if (sessionStorage.getItem('access_token') != null) {
      console.log('Redirect for resource: ' + 'http://localhost:8080/customers/byUsername/' + user.username);
      return this.http.get<Customer>('http://localhost:8080/customers/byUsername/' + user.username, {headers: headers});
    } else {
      this.alertService.logginErrorAlert();
      this.router.navigate(['/login']);
    }
  }
}

export interface Customer {
  customerId: number;
  orders: Order[];
  address: Address;
  contact: Contact;
  emailLogin: string;
  password: string;
  lastName: string;
  firstName: string;
  typeOfClient: string;
  role: string;
  companyName: string;
  accountActive: boolean;
  nip: string;
  regon: string;
}

export interface Contact {
  contactId: number;
  phoneNumber1: string;
  emailAddress: string;
  phoneNumber2: string;
  faxAddress: string;
  wwwDomain: string;
}

export interface Address {
  addressId: number;
  country: string;
  city: string;
  voivodeship: string;
  county: string;
  zipCode: string;
  streetName: string;
  doorNumber: string;
  localNumber: string;
}
