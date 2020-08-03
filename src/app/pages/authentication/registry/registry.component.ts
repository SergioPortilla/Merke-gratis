import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../shared/services/authentication.service';
import { Person } from '../../../core/models/person';
import { DocumentType } from '../../../core/models/documentType';
import { ListValuesService } from '../../../shared/services/list-values.service';
import { City } from '../../../core/models/city';

@Component({
  selector: 'merke-gratis-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {
  userRegistry: Person;
  documentsType: DocumentType[];
  cities: City[];

  constructor(private authService: AuthenticationService, private listValuesService: ListValuesService) {}

  ngOnInit(): void {
    this.userRegistry = new Person();
    this.getTypeIdentifications();
    this.getCities();
  }

  getTypeIdentifications() {
    this.listValuesService.getTypeIdentifications().subscribe((response) => (this.documentsType = response));
  }

  getCities() {
    this.listValuesService.getCities().subscribe((response) => (this.cities = response));
  }

  registry() {
    this.authService.sendLogin(this.userRegistry).subscribe((responseany) => {});
  }
}
