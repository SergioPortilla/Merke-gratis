import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { apiUrl } from '../../core/constants/apiUrl.constants';
import { Person } from '../../core/models/person';
import { Login } from '../../core/models/login';
import { HttpConstants } from '../../core/constants/httpConstants';
import { Observable } from 'rxjs';

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
    return this.http.post(this.person, person);
  }

  public sendLogin(login: Login) {
    return this.http.post(this.login, login, { observe: 'response', withCredentials: true });
  }

  public isAdmin(): boolean {
    if (!sessionStorage.getItem('sessionType')) {
      this.http.get(this.admin).subscribe((response: Response) => {
        if (response.status === HttpConstants.ACCEPTED) {
          sessionStorage.setItem('sessionType', 'admin');
        }
      });
    }
    return !!sessionStorage.getItem('sessionType');
  }

  public isPerson() {
    return this.http.get(this.user);
  }
}
