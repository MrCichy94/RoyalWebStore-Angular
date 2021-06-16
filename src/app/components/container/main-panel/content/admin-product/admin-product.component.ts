import { Component, OnInit } from '@angular/core';
import {Copy, Product, ProductServiceService} from '../../../../../services/productService/product-service.service';
import {CartServiceService} from '../../../../../services/cartService/cart-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  product: Product;

  copies: Copy[];
  totalRecords: number;
  page = 1;

  constructor(private productServiceService: ProductServiceService,
              private cartServiceService: CartServiceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById(): void {
    const id = +this.route.snapshot.paramMap.get('productId');
    this.productServiceService.getProductById(id).subscribe((product) => {
      this.product = product;
      this.totalRecords = product.copies.length;
    });
  }
}
