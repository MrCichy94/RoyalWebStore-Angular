import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductServiceService} from '../../../../../../services/productService/product-service.service';
import {CartServiceService} from '../../../../../../services/cartService/cart-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;

  constructor(private productServiceService: ProductServiceService,
              private cartServiceService: CartServiceService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById(): void {
    const id = +this.route.snapshot.paramMap.get('productId');
    this.productServiceService.getProductById(id)
      .subscribe(product => this.product = product);
  }

  addToCart(productId: number, copyId: number): void {
    this.cartServiceService.addCopyWithGivenIdOfProductWithGivenIdToCustomerCart(productId, copyId)
      .subscribe();
  }
}
