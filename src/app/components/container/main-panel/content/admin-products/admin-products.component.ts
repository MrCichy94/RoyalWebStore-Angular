import { Component, OnInit } from '@angular/core';
import {Product, ProductServiceService} from '../../../../../services/productService/product-service.service';
import {AuthenticationService} from '../../../../../services/authentication/authentication.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private productServiceService: ProductServiceService,
              private route: ActivatedRoute) { }

  products: Product[];
  totalRecords: number;
  page = 1;

  ngOnInit(): void {
    this.displayProducts();
  }

  displayProducts() {
    this.productServiceService.getAllProducts().subscribe((value) => {
      this.products = value;
      this.totalRecords = value.length;
      console.log(value.length);
    });
  }
}
