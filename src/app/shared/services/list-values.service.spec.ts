import { TestBed } from '@angular/core/testing';

import { ListValuesService } from './list-values.service';

describe('ListValuesService', () => {
  let service: ListValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
