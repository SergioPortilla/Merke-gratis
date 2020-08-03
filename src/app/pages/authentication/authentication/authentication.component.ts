import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './authentication.animations';
import { AuthenticationService } from '../../../shared/services/authentication.service';
import { Roots } from '../../../core/models/roots';
import { Route } from '../../../core/constants/route.constants';
import { root } from 'rxjs/internal-compatibility';
import { Translate } from '../../../core/constants/translate.constans';

@Component({
  selector: 'merke-gratis-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  animations: [slideInAnimation]
})
export class AuthenticationComponent implements OnInit {
  optionsRoots: Roots[];

  constructor(translate: TranslateService) {
    translate.use('es');
    translate.get([Translate.login, Translate.register, Translate.info]).subscribe((value) => {
      this.optionsRoots = [
        new Roots(1, true, Route.PATHS.AUTHENTICATION.LOGIN, value[Translate.login], 'routeActive'),
        new Roots(2, false, Route.PATHS.AUTHENTICATION.REGISTRY, value[Translate.register], 'routeActive'),
        new Roots(3, false, Route.PATHS.AUTHENTICATION.ABOUT, value[Translate.info], 'routeActive')
      ];
    });
  }

  ngOnInit(): void {}

  selectOption(id: number) {
    this.optionsRoots.forEach((route) => {
      route.selected = id === route.id;
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
