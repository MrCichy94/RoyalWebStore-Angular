import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyClientService {

  constructor(private httpClient: HttpClient) { }

  public getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>('http://localhost:8080/products/' + id);
  }

  public getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:8080/products');
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

export interface CategoryAndManufacturer {
  categoriesManufacturerId: number;
  category: string;
  manufacturer: string;
}

export interface Product {
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
