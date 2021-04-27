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

  selectedCar: string;

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'}
  ];

  ngOnInit(): void {
    this.productServiceService.getAllProducts().subscribe(value => {
      this.products = value;
    });
  }
}

interface Car {
  value: string;
  viewValue: string;
}
