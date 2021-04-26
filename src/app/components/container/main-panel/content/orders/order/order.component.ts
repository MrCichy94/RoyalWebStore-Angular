import {Component, OnInit} from '@angular/core';
import {Order, OrderServiceService} from '../../../../../../services/orderService/order-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Order[];

  constructor(private orderCartServiceService: OrderServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.orderCartServiceService.getAllOrders().subscribe(value => {
      this.orders = value;
    });
  }

}
