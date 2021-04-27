import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient, private router: Router) {
  }

  public getProductById(id: number): Observable<Product> {
    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    });
    console.log(sessionStorage.getItem('access_token'));
    if (sessionStorage.getItem('access_token') != null) {
      console.log('Redirect for resource: ' + 'http://localhost:8080/products/' + id);
      return this.http.get<Product>('http://localhost:8080/products/' + id, {headers: headers});
    } else {
      this.router.navigate(['/login']);
    }
  }

  public getAllProducts(): Observable<Product[]> {
    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    });
    console.log(sessionStorage.getItem('access_token'));
    if (sessionStorage.getItem('access_token') != null) {
      console.log('Redirect for resource: ' + 'http://localhost:8080/products');
      return this.http.get<Product[]>('http://localhost:8080/products', {headers: headers});
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

