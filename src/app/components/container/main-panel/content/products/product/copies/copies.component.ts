import { Component, OnInit } from '@angular/core';
import {Copy, ProductServiceService} from '../../../../../../../services/productService/product-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-copies',
  templateUrl: './copies.component.html',
  styleUrls: ['./copies.component.css']
})
export class CopiesComponent implements OnInit {

  copies: Copy[];

  constructor(private productServiceService: ProductServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCopiesOfProductById();
  }

  getCopiesOfProductById(): void {
    const id = +this.route.snapshot.paramMap.get('productId');
    this.productServiceService.getCopiesOfProductWithGivenId(id)
      .subscribe(copis => this.copies = copis);
  }

}
