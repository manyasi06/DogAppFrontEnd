import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Person } from './../models/Person';
import { TestBed } from '@angular/core/testing';

import { PersonsService } from './persons.service';


describe('PersonsService', () => {
  let personService: PersonsService;

  const testPersons: Array<Person> = [
    { "id": 1,
     "firstname": "Bryan",
      "lastname": "Musungu",
      "dogs": [
        { "id": 1,
        "breed": "labrodoodle",
         "nameofdog": "John"
        }
      ]
    },
    { "id": 2,
     "firstname": "Frank",
      "lastname": "Musungu",
      "dogs": [
        { "id": 1,
        "breed": "labrodoodle",
         "nameofdog": "John"
        }
      ]
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    personService = TestBed.inject(PersonsService);
  });

  /*
  it('should be created', () => {
    expect(personService).toBeTruthy();
  });
  */

});
