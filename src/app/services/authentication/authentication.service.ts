import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

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
        const userToken = res.headers.get('Authorization');
        const userId = res.headers.get('Principal-ID');
        sessionStorage.setItem('thisUserID', userId);
        sessionStorage.setItem('access_token', userToken);
        console.log(res.headers);
        console.log(userId);
        console.log(userToken);
        const myUser = new User();
        myUser.username = this.credentials.username;
        sessionStorage.setItem('currentUser', JSON.stringify(myUser));
        this.currentUserSubject.next(myUser);
      }));
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

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
