import {Component, OnInit} from '@angular/core';
import {Order, OrderServiceService} from '../../../../../../services/orderService/order-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: Order;

  constructor(private orderServiceService: OrderServiceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const thisUserID = sessionStorage.getItem('thisUserID');
    const thisOrderId = sessionStorage.getItem('order_id');
    this.orderServiceService.getCustomersOrderById(Number(thisUserID), Number(thisOrderId)).subscribe(value => {
      this.order = value;
    });
  }

}
