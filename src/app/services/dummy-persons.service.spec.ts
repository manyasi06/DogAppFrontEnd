import { TestBed } from '@angular/core/testing';

import { DummyPersonsService } from './dummy-persons.service';

describe('DummyPersonsService', () => {
  let service: DummyPersonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyPersonsService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
