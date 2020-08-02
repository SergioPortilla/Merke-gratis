import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './authentication.animations';
import { AuthenticationService } from '../../../shared/services/authentication.service';
import { City } from '../../../shared/models/city';

@Component({
  selector: 'merke-gratis-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  animations: [slideInAnimation]
})
export class AuthenticationComponent implements OnInit {
  selected = false;
  algo: City[];

  constructor(translate: TranslateService, authenticationService: AuthenticationService) {
    translate.use('es');
  }

  ngOnInit(): void {}

  selectOption() {
    this.selected = !this.selected;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
