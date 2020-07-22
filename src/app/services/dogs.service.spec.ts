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
    mockDogService.getDogById(1).subscribe(dog => {
      expect(dog).toEqual(dogStub[0]);
    })
  })

  it('Should edit the dog 1', ()=>{
    let dogedit: Dogs = {
      id: 1,
      breed: 'Giant Schnauzer',
      nameofdog: 'Leo Messi'
    }

    mockDogService.editDog(dogedit).subscribe()


    //expect to  get the dog ediit
    mockDogService.getDogById(1).subscribe(
      (dog : Dogs) =>{
        expect(dog).toEqual(dogedit);
      }
    )
  })


});










