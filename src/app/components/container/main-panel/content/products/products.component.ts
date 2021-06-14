import {AfterViewInit, Component, OnInit, Pipe, PipeTransform, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductServiceService} from '../../../../../services/productService/product-service.service';
import {AuthenticationService} from '../../../../../services/authentication/authentication.service';
import {AlertService} from '../../../../../services/authentication/alert.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

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
  totalRecords: number;
  page = 1;

  selectedCategory = 'Wszystko';

  categories: Category[] = [
    {value: 'Obuwie', viewValue: 'Obuwie'},
    {value: 'Akcesoria', viewValue: 'Akcesoria'},
    {value: 'Ubrania', viewValue: 'Ubrania'}
  ];

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

interface Category {
  value: string;
  viewValue: string;
}

@Pipe({
  name: 'productFilter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[], filterString: string, propName: string): any {
    if (filterString === 'Wszystko') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item.productCategory === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
