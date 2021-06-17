import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {AlertService} from '../authentication/alert.service';

@Injectable({
  providedIn: 'root'
})
export class CopyServiceService {

  constructor(private http: HttpClient, private router: Router, private alertService: AlertService) { }

  public createNewCopyOfProduct(requestData: string, productId: number) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    });
    console.log(sessionStorage.getItem('access_token'));
    if (sessionStorage.getItem('access_token') != null) {
      console.log('Redirect for resource: ' + 'http://localhost:8080/products/' + productId);
      return this.http.post('http://localhost:8080/products/' + productId, requestData, {headers: headers});
    } else {
      this.router.navigate(['/login']);
    }
  }

  public changeStatusCopyOfProductWithGivenIds(productId: number, copyId: number) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Content-Length': '0',
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    });
    console.log(sessionStorage.getItem('access_token'));
    if (sessionStorage.getItem('access_token') != null) {
      console.log('Redirect for resource: ' + 'http://localhost:8080/products/' + productId + '/' + copyId);
      return this.http.post('http://localhost:8080/products/' + productId + '/' + copyId, [], {headers: headers});
    } else {
      this.router.navigate(['/login']);
    }
  }
}
