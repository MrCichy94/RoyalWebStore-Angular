import { Component, OnInit } from '@angular/core';
import {CurrencyClientService, Product} from '../../services/currency-client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],

})
export class MainPanelComponent implements OnInit {

  products: Product[];

  constructor(private currencyClientService: CurrencyClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currencyClientService.getAllProducts().subscribe(value => {
      this.products = value;
    });
  }

}

/*
<div class="places" *ngIf="products">
  <li *ngFor="let product of products; index as i; first as isFirst">
    <div>
      {{product.productId}}
      {{product.productName}}
      {{product.type}}
      {{product.version}}
      {{product.productDescription}}
      {{product.sellBaseGrossPrice}}
      {{product.sellBaseNetPrice}}
      {{product.vatPercentage}}
      {{product.vatValue}}
      <span *ngIf="isFirst"></span>
    </div>
  </li>
</div>
 */
