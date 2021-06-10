import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../../../services/authentication/authentication.service';
import {AlertService} from '../../../../../services/authentication/alert.service';
import {UserService} from '../../../../../services/userService/user.service';
import {ProductServiceService} from '../../../../../services/productService/product-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addItemForm: FormGroup;
  loading = false;
  submitted = false;
  requestData: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService,
    private productServiceService: ProductServiceService
  ) { }

  ngOnInit() {
    this.addItemForm = this.formBuilder.group({
      productName: ['', [Validators.required, Validators.pattern('[a-zA-Z]{2,25}')]],
      sellBaseGrossPrice: ['', [Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{2})?$')]],
      vatPercentage: ['', [Validators.required, Validators.pattern('^-?[0]\\d*(\\.\\d{2})?$')]]
    });
  }

  get f() {
    return this.addItemForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();

    if (this.addItemForm.invalid) {
      return;
    }
    this.loading = true;
    this.requestData = this.preparePostData(this.addItemForm.value);
    this.productServiceService.createNewProduct(this.requestData)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Add item successful', true);
          this.router.navigate(['/']);
        },
        error => {
          this.alertService.registerError(error);
          this.loading = false;
        });
  }

  public preparePostData(data: string) {
    const stringData = JSON.stringify({
      productName: this.f.emailLogin.value,
      sellBaseGrossPrice: this.f.password.value,
      vatPercentage: this.f.firstName.value
    });
    console.log(stringData);
    return stringData;
  }

}
