import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../../../services/authentication/alert.service';
import {ProductServiceService} from '../../../../../services/productService/product-service.service';
import {first} from 'rxjs/operators';
import {CopyServiceService} from '../../../../../services/copyService/copy-service.service';

@Component({
  selector: 'app-add-copy',
  templateUrl: './add-copy.component.html',
  styleUrls: ['./add-copy.component.css']
})
export class AddCopyComponent implements OnInit {

  addItemForm: FormGroup;
  loading = false;
  submitted = false;
  requestData: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private alertService: AlertService,
              private copyServiceService: CopyServiceService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.addItemForm = this.formBuilder.group({
      merchandisingCode: ['', [Validators.required, Validators.pattern('.*\\S.*[a-zA-z0-9 ]{2,25}')]],
      buyGrossPrice: ['', [Validators.required, Validators.pattern('^-?[0-9]\\d*(\\.\\d{2})?$')]],
      buyVatPercentage: ['', [Validators.required, Validators.pattern('^-?[0]\\d*(\\.\\d{2})?$')]]
    });
  }

  get f() {
    return this.addItemForm.controls;
  }

  onSubmit() {
    const productId = +this.route.snapshot.paramMap.get('productId');
    this.submitted = true;
    this.alertService.clear();

    if (this.addItemForm.invalid) {
      return;
    }
    this.loading = true;
    this.requestData = this.preparePostData(this.addItemForm.value);
    this.copyServiceService.createNewCopyOfProduct(this.requestData, productId)
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
      merchandisingCode: this.f.productName.value,
      buyGrossPrice: this.f.sellBaseGrossPrice.value,
      buyVatPercentage: this.f.vatPercentage.value
    });
    console.log(stringData);
    return stringData;
  }
}
