import { Component, OnInit } from '@angular/core';
import { Login } from '../../../core/models/login';
import { AuthenticationService } from '../../../shared/services/authentication.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Route } from '../../../core/constants/route.constants';
import { HttpConstants } from '../../../core/constants/httpConstants';

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
    this.authService.sendLogin(this.userLogin).subscribe((response: string) => {
      localStorage.setItem('token', response);
      this.redirectAdmin();
    });
  }

  redirectAdmin() {
    this.authService.isAdmin().subscribe((isAdmin: HttpResponse<string>) => {
      if (isAdmin.status === HttpConstants.OK) {
        localStorage.setItem('sessionType', isAdmin.body);
        localStorage.setItem('admin', 'true');
        this.router.navigate([Route.PATHS.HOME_ADMIN.PRINCIPAL]);
        return;
      }
    });
    this.authService.isPerson().subscribe((isPerson: HttpResponse<string>) => {
      if (isPerson.status === HttpConstants.OK && !localStorage.getItem('sessionType')) {
        localStorage.setItem('sessionType', isPerson.body);
        this.router.navigate([Route.PATHS.HOME_PERSON.PRINCIPAL]);
      }
    });
  }
}
