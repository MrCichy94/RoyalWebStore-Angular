import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Order} from '../orderService/order-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(request: string) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });
    return this.http.post('http://localhost:8080/customers/add', request, {headers: headers});
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
