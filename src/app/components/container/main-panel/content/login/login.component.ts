import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authRequest = '{"password":"WisłaPany","username":"Skylake"}';

  response: any;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest) {
    const resp = this.authenticationService.generateToken(authRequest);
  }

}
