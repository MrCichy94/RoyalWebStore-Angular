import { Component, OnInit } from '@angular/core';
import {CurrencyClientService, Product} from '../../services/currency-client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],

})
export class MainPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
