import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AlertService} from '../authentication/alert.service';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient, private router: Router, private alertService: AlertService) {
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
      this.alertService.logginErrorAlert();
      this.router.navigate(['/login']);
    }
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

  public getCopiesOfProductWithGivenId(id: number): Observable<Copy[]> {
    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    });
    console.log(sessionStorage.getItem('access_token'));
    if (sessionStorage.getItem('access_token') != null) {
      console.log('Redirect for resource: ' + 'http://localhost:8080/products/' + id + '/copies');
      return this.http.get<Copy[]>('http://localhost:8080/products/' + id + '/copies', {headers: headers});
    } else {
      this.router.navigate(['/login']);
    }
  }

  public createNewProduct(requestData: string) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    });
    console.log(sessionStorage.getItem('access_token'));
    if (sessionStorage.getItem('access_token') != null) {
      console.log('Redirect for resource: ' + 'http://localhost:8080/products/newproduct/add');
      return this.http.post('http://localhost:8080/products/newproduct/add', requestData, {headers: headers});
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
  category: Category;
  manufacturer: Manufacturer;
}

export interface Category {
  categoryId: number;
  categoryName: string;
}

export interface Manufacturer {
  manufacturerId: number;
  manufacturerName: string;
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

