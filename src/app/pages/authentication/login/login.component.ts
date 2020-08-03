import { Component, OnInit } from '@angular/core';
import { Login } from '../../../core/models/login';
import { AuthenticationService } from '../../../shared/services/authentication.service';

@Component({
  selector: 'merke-gratis-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin: Login;

  constructor(private authService: AuthenticationService) {}
  ngOnInit(): void {
    this.userLogin = new Login();
  }

  login() {
    this.authService.sendLogin(this.userLogin).subscribe((responseany) => {});
  }
}
