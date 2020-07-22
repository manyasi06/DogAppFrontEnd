import { TestBed } from '@angular/core/testing';

import { DogsService } from './dogs.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Dogs } from '../models/Dogs';


const dogStub: Array<Dogs> = [
  {
    id: 1,
    breed: 'Giant Schnauzer',
    nameofdog: 'Leo'
  }
  ,
  {
    id: 2,
    breed: 'Giant Schnauzer',
    nameofdog: 'Frank'
  }
];


describe('DogsService', () => {

  let mockDogService: DogsService;
  let httpTestingContrller: HttpTestingController;

  beforeEach( () => {TestBed.configureTestingModule(
    {
    imports: [HttpClientTestingModule],
    providers: [
      DogsService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    mockDogService = TestBed.inject(DogsService);
    httpTestingContrller = TestBed.inject(HttpTestingController);
  });



  it('Should get all dogs',()=>{
    mockDogService.getAllDogs().subscribe(dogs =>{
      expect(dogs).toBeTruthy('No dogs returned');
    })
  });

  it('Should get id 1', () => {
    //Todo setup get by id
  })


});










