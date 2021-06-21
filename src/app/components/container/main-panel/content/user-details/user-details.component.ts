import { Component, OnInit } from '@angular/core';
import {AuthenticationService, User} from '../../../../../services/authentication/authentication.service';
import {Customer, UserService} from '../../../../../services/userService/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  currentUser: User;
  customer: Customer;

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit(): void {
    this.getCustomerData(this.currentUser);
  }

  getCustomerData(currentUser: User) {
    this.userService.getCustomerByUsername(currentUser).subscribe(
      data => this.customer = data);
  }

}
