import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../../../services/authentication/authentication.service';
import {AlertService} from '../../../../../services/authentication/alert.service';
import {UserService} from '../../../../../services/userService/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  requestData: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private userService: UserService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailLogin: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      typeOfClient: ['', Validators.required],
      phoneNumber1: ['', Validators.required],
      emailAddress: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.requestData = this.preparePostData(this.registerForm.value);
    this.userService.register(this.requestData)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  public preparePostData(data: string) {
    const stringData = JSON.stringify({ emailLogin: this.f.emailLogin.value,
      password: this.f.password.value,
      firstName: this.f.firstName.value,
      lastName: this.f.lastName.value,
      typeOfClient: this.f.typeOfClient.value,
      contact: {
        phoneNumber1: this.f.phoneNumber1.value,
        emailAddress: this.f.emailAddress.value
      }});
    console.log(stringData);
    return stringData;
  }
}