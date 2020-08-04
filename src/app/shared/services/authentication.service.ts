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
  private readonly restriction = `${this.hostUrl + apiUrl.application + apiUrl.public + apiUrl.restriction}`;

  private readonly person = `${this.hostUrl + apiUrl.application + apiUrl.person}`;
  private readonly login = `${this.hostUrl + apiUrl.login}`;
  private readonly admin = `${this.restriction + apiUrl.admin}`;
  private readonly user = `${this.restriction + apiUrl.user}`;

  constructor(private http: HttpClient) {}

  public sendRegistry(person: Person) {
    const json = {
      documentNumber: person.documentNumber,
      documentType: person.documentType,
      firstName: person.firstName,
      secondName: person.secondName,
      firstLastName: person.firstLastName,
      secondLastName: person.secondLastName,
      address: person.address,
      phone: person.phone,
      city: person.city,
      email: person.email,
      userName: person.username,
      password: person.password
    };
    return this.http.post(this.person, json);
  }

  public sendLogin(login: Login) {
    return this.http.post(this.login, login, { responseType: 'text' });
  }

  public isAdmin() {
    return this.http.get(this.admin, { responseType: 'text', observe: 'response' });
  }

  public isPerson() {
    return this.http.get(this.user, { responseType: 'text', observe: 'response' });
  }

  public isAuthenticate(): boolean {
    return !!localStorage.getItem('sessionType');
  }

  public isAuthenticateAdmin(): boolean {
    return !!localStorage.getItem('admin');
  }
}
