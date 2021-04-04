import { Component, OnInit } from '@angular/core';
import {CurrencyClientService, Product} from '../../../../../services/currency-client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;

  constructor(private currencyClientService: CurrencyClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductById();
  }
  getProductById(): void {
    const id = +this.route.snapshot.paramMap.get('productId');
    this.currencyClientService.getProductById(id)
      .subscribe(product => this.product = product);
  }

}
