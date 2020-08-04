import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { Route } from '../constants/route.constants';

@Injectable({
  providedIn: 'root'
})
export class PersonGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  canActivate() {
    if (this.authenticationService.isAuthenticate()) {
      return true;
    }

    this.router.navigate([Route.PATHS.INIT + '/' + Route.PATHS.AUTHENTICATION.LOGIN]);
    return false;
  }
}
