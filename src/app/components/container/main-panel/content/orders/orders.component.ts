import { Component, OnInit } from '@angular/core';
import {Order, OrderServiceService} from '../../../../services/orderService/order-service.service';
import {ProductServiceService} from '../../../../services/productService/product-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  order: Order[];

  constructor(private orderServiceService: OrderServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.orderServiceService.getAllOrders().subscribe(value => {
      this.order = value;
    });
  }

}
