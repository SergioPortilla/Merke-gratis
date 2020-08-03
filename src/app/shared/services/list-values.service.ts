import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DocumentType } from '../../core/models/documentType';
import { City } from '../../core/models/city';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { apiUrl } from '../../core/constants/apiUrl.constants';
import { error } from '@angular/compiler/src/util';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListValuesService {
  private readonly hostUrl = environment.apiUrl;
  private readonly document = `${this.hostUrl + apiUrl.application + apiUrl.person + apiUrl.documentType}`;
  private readonly city = `${this.hostUrl + apiUrl.application + apiUrl.city}`;

  constructor(private http: HttpClient) {}

  public getTypeIdentifications(): Observable<DocumentType[]> {
    return this.http.get(this.document).pipe(
      map((result: any) => {
        return result;
      })
    );
  }

  public getCities(): Observable<City[]> {
    return this.http.get(this.city).pipe(
      map((result: City[]) => {
        return result;
      })
    );
  }
}
