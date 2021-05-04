import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {NavigationStart, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private subject = new Subject<any>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
        } else {
          this.clear();
        }
      }
    });
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  success(message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({type: 'success', text: 'Zalogowano pomyślnie!'});
  }

  loginError(message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({type: 'error', text: 'Username or password is incorrect!'});
  }

  registerError(message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({type: 'error', text: 'Account with this email already exists!'});
  }

  logginErrorAlert() {
    Swal.fire('Access denied', 'You must log in first!', 'error');
  }

  copyAddedToCartSuccess() {
    Swal.fire('Success!', 'Item added to your cart!', 'success');
  }

  addCopyToCartFailure() {
    Swal.fire('Error!', 'Try again!', 'error');
  }

  clear() {
    this.subject.next();
  }
}
