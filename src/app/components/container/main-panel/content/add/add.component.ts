import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AlertService} from '../../../../../services/authentication/alert.service';
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
  ) {
  }

  ngOnInit() {
    this.addItemForm = this.formBuilder.group({
      productName: ['', [Validators.required, Validators.pattern('.*\\S.*[a-zA-z0-9 ]{2,25}')]],
      productManufacturer: ['', [Validators.required, Validators.pattern('.*\\S.*[a-zA-z0-9 ]{2,25}')]],
      productCategory: ['', [Validators.required, Validators.pattern('.*\\S.*[a-zA-z0-9 ]{2,25}')]],
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
      productName: this.f.productName.value,
      productManufacturer: this.f.productManufacturer.value,
      productCategory: this.f.productCategory.value,
      sellBaseGrossPrice: this.f.sellBaseGrossPrice.value,
      vatPercentage: this.f.vatPercentage.value
    });
    console.log(stringData);
    return stringData;
  }

}
