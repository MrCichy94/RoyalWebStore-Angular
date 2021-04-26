import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Cookie} from 'ng2-cookies';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  credentials: any;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public generateToken(username, password) {
    this.credentials = {
      'password': password,
      'username': username
    };
    return this.http.post('http://localhost:8080/login', this.credentials, {
      responseType: 'arraybuffer',
      observe: 'response'
    })
      .pipe(map(res => {
        const myHeader = res.headers.get('Authorization');
        sessionStorage.setItem('access_token', myHeader);
        console.log(res.headers);
        console.log(myHeader);
        const myUser = new User();
        myUser.username = this.credentials.username;
        sessionStorage.setItem('currentUser', JSON.stringify(myUser));
        this.currentUserSubject.next(myUser);
      }));
  }

  saveTokenInfo(token) {
    console.log('Obtained Access token');
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  /*
  login(username, password) {
    return this.http.post<any>(`http://localhost:8080/login`, { username, password })
      .pipe(map(user => {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }
   */

  logout() {
    sessionStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}

export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
}
