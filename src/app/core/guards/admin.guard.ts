import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { Route } from '../constants/route.constants';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  canActivate() {
    if (this.authenticationService.isAdmin()) {
      return true;
    }
    this.router.navigate([Route.PATHS.AUTHENTICATION.LOGIN]);
    return false;
  }
}
