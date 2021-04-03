import { Component, OnInit } from '@angular/core';
import {CurrencyClientService, Product} from '../../../../services/currency-client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private currencyClientService: CurrencyClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currencyClientService.getAllProducts().subscribe(value => {
      this.products = value;
    });
  }

}
