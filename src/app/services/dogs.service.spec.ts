import { TestBed } from "@angular/core/testing";

import { DogsService } from "./dogs.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Dogs } from "../models/Dogs";

const dogStub: Array<Dogs> = [
  {
    id: 1,
    breed: "Giant Schnauzer",
    nameofdog: "Leo",
  },
  {
    id: 2,
    breed: "Giant Schnauzer",
    nameofdog: "Frank",
  }
];

describe("DogsService", () => {
  let mockDogService: DogsService;
  let httpTestingContrller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DogsService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    mockDogService = TestBed.inject(DogsService);
    httpTestingContrller = TestBed.inject(HttpTestingController);
  });

  it("Should get all dogs", () => {
    mockDogService.getAllDogs().subscribe((dogs) => {
      expect(dogs).toBeTruthy("No dogs returned");

      expect(dogs.length).toBe(2, "Incorrect number of dogs");
    });

    const req = httpTestingContrller.expectOne(
      "api/dogs",
      "This is not finding the correct route"
    );

    expect(req.request.method).toEqual("GET", "This not calling a get method");

    req.flush(dogStub);

    httpTestingContrller.verify();
  });

  it("Should get id 1", () => {
    //Todo setup get by id
    mockDogService.getDogById(1).subscribe((dog) => {
      expect(dog).toEqual(dogStub[0]);
    });
  });

  it("Should edit the dog 1", () => {
    let dogedit: Dogs = {
      id: 1,
      breed: "Giant Schnauzer",
      nameofdog: "Leo Messi",
    };

    mockDogService.editDog(dogedit).subscribe((resp: Response) => {
      expect(resp.status).toEqual(202);
    });

    //expect to  get the dog ediit
    mockDogService.getDogById(1).subscribe((dog: Dogs) => {
      expect(dog).toEqual(dogedit);
    });
  });;

  it("Should delete a dog in the database", () => {
    mockDogService.deleteDog(1).subscribe();
    mockDogService.getAllDogs().subscribe((resp) => {
      expect(resp.length).toEqual(1);
    });
  });

  it("Should make a new dog", () => {
    mockDogService.createDog({
      id: 3,
      breed: "Giant Schnauzer",
      nameofdog: "Leo Joon",
    }).subscribe();




    mockDogService.getAllDogs().subscribe((resp)=>{
      console.log(resp)
      expect(resp.length).toEqual(3);
      expect(resp).toBeTruthy();
      expect(resp).toBe([
        {
          id: 1,
          breed: "Giant Schnauzer",
          nameofdog: "Leo",
        },
        {
          id: 2,
          breed: "Giant Schnauzer",
          nameofdog: "Frank",
        },
        {
          id: 3,
          breed: "Giant Schnauzer",
          nameofdog: "Leo Joon",
        }
      ])
    })
  });
});
