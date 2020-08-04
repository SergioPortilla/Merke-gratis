import { City } from './city';
import { DocumentType } from './documentType';

export class Person {
  documentNumber: string;
  documentType: DocumentType;
  firstName: string;
  secondName: string;
  firstLastName: string;
  secondLastName: string;
  address: string;
  phone: number;
  city: City;
  email: string;
  userName: string;
  password: string;
}
