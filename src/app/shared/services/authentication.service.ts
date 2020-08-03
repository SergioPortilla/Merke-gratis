import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { apiUrl } from '../../core/constants/apiUrl.constants';
import { Person } from '../../core/models/person';
import { Login } from '../../core/models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly hostUrl = environment.apiUrl;
  private readonly person = `${this.hostUrl + apiUrl.person}`;
  private readonly login = `${this.hostUrl + apiUrl.login}`;

  constructor(private http: HttpClient) {}

  public sendRegistry(person: Person) {
    return this.http.post(this.person, person);
  }

  public sendLogin(login: Login) {
    return this.http.post(this.login, login);
  }
}
