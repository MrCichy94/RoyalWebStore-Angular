import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  btnClickProducts = function() {
    this.router.navigateByUrl('/products');
  };

  btnClickOrders = function() {
    this.router.navigateByUrl('/customers/orders');
  };

  btnClickCarts = function() {
    this.router.navigateByUrl('/customers/carts');
  };


}
