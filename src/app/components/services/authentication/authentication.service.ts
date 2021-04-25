import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Cookie} from 'ng2-cookies';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  public generateToken(request) {
    return this.http.post('http://localhost:8080/login', request, {
      responseType: 'arraybuffer',
      observe: 'response'
    })
      .pipe(map(res => {
        const myHeader = res.headers.get('Authorization');
        console.log(res.headers);
        console.log(myHeader);
        const expireDate = new Date().getTime() + 3600000;
        Cookie.set('access_token', myHeader, expireDate);
      }))
      .subscribe(data => this.saveTokenInfo(data),
        err => alert('Invalid Credentials'));
  }

  saveTokenInfo(token) {
    console.log('Obtained Access token');
  }

  getResource(resourceUrl): Observable<any> {
    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer ' + Cookie.get('access_token')
    });
    return this.http.get(resourceUrl, {headers: headers});
  }

  checkCredentials() {
    return Cookie.check('access_token');
  }
}
