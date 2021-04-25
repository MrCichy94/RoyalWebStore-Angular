import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductServiceService} from '../../../../services/productService/product-service.service';
import {AuthenticationService} from '../../../../services/authentication/authentication.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private authenticationService: AuthenticationService,
              private productServiceService: ProductServiceService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productServiceService.getAllProducts().subscribe(value => {
      this.products = value;
    });
  }

}
