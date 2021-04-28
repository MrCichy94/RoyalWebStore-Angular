import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductServiceService} from '../../../../../services/productService/product-service.service';
import {AuthenticationService} from '../../../../../services/authentication/authentication.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private productServiceService: ProductServiceService,
              private route: ActivatedRoute) {
  }

  products: Product[];

  selectedCategory: string;

  categories: Category[] = [
    {value: 'Obuwie', viewValue: 'Obuwie'},
    {value: 'Akcesoria', viewValue: 'Akcesoria'},
    {value: 'Ubrania', viewValue: 'Ubrania'}
  ];

  ngOnInit(): void {
    this.displayProducts();
  }

  displayProducts() {
    this.productServiceService.getAllProducts().subscribe(value => {
      this.products = value;
    });
  }
}

interface Category {
  value: string;
  viewValue: string;
}
