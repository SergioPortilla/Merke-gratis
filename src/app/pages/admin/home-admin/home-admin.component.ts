import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'merke-gratis-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {
  sessionType: string;

  constructor() {}

  ngOnInit(): void {
    this.sessionType = localStorage.getItem('sessionType');
  }
}
