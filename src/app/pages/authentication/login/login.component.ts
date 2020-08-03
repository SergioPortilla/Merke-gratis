import { Component, OnInit } from '@angular/core';
import { Login } from '../../../core/models/login';
import { AuthenticationService } from '../../../shared/services/authentication.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Route } from '../../../core/constants/route.constants';

@Component({
  selector: 'merke-gratis-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin: Login;

  constructor(private authService: AuthenticationService, private router: Router) {}
  ngOnInit(): void {
    this.userLogin = new Login();
  }

  login() {
    this.authService.sendLogin(this.userLogin).subscribe((response: HttpResponse<any>) => {
      debugger;
      localStorage.setItem('token', response.headers.get('Authorization'));
      if (this.authService.isAdmin()) {
        this.router.navigate([Route.PATHS.HOMEADMIN.PRINCIPAL]);
      } else if (this.authService.isPerson()) {
        this.router.navigate([Route.PATHS.HOMEADMIN.PRINCIPAL]);
      }
    });
  }
}
