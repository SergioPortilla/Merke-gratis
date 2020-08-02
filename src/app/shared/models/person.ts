import { City } from './city';
import { Login } from './login';
import { DocumentType } from './documentType';

export class Person extends Login {
  identification: string;
  documentType: DocumentType;
  firstName: string;
  secondName: string;
  firstLastName: string;
  secondLastName: string;
  address: string;
  phone: number;
  city: City;
  email: string;
}
