import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DocumentType } from '../models/documentType';
import { City } from '../models/city';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { apiUrl } from '../constants/apiUrl.constants';
import { error } from '@angular/compiler/src/util';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListValuesService {
  private readonly hostUrl = environment.apiUrl;
  private readonly city = this.hostUrl + apiUrl.application + apiUrl.person;

  constructor(private http: HttpClient) {}

  public getTypeIdentification(): DocumentType[] {
    const cedula: DocumentType = new DocumentType('C.C', 'Cedula de ciudadania');
    const tarjeta: DocumentType = new DocumentType('T.I', 'Tarjeta de identidad');
    const foreign: DocumentType = new DocumentType('C.E', 'Cedula de extranjeria');

    return [cedula, tarjeta, foreign];
  }

  public getCities(): Observable<City[]> {
    return this.http.get(this.city).pipe(
      map((result: City[]) => {
        return result;
      })
      // error((error) => {
      //
      // })
    );
    // const bucaramanga: City = new City(2, 'Bucaramanga');
    // const medallo: City = new City(3, 'Medallo');
    // const bogota: City = new City(4, 'Bogota');
    //
    // return [bucaramanga, medallo, bogota];
  }
}
