import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ScriptService} from '../../services/scriptService/script.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContainerComponent implements OnInit {

  constructor(private script: ScriptService) { }

  ngOnInit(): void {
    this.script.load('TimelineMax', 'TweenMax', 'fullPage', 'app').then(data => {
      console.log('script loaded ', data);
    }).catch(error => console.log(error));
  }

}
