import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showUserDetails() {
    this.router.navigateByUrl('/user');
  }
}
