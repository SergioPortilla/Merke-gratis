import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'merke-gratis-home-person',
  templateUrl: './home-person.component.html',
  styleUrls: ['./home-person.component.scss']
})
export class HomePersonComponent implements OnInit {
  sessionType: string;

  constructor() {}

  ngOnInit(): void {
    this.sessionType = localStorage.getItem('sessionType');
  }
}
