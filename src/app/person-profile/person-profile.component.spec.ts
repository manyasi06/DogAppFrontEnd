import { Observable, of } from  'rxjs';


import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Person } from "./../models/Person";
import { DummyPersonsService } from "./../services/dummy-persons.service";
import { PersonsService } from "./../services/persons.service";
import {
  async,
  ComponentFixture,
  TestBed,
  inject,
  fakeAsync,
  tick,
} from "@angular/core/testing";
import { PersonProfileComponent } from "./person-profile.component";
import { NO_ERRORS_SCHEMA, DebugElement } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { Dogs } from "../models/Dogs";


const dogStub: Array<Dogs> = [
  { id: 2, breed: "Chorkie", nameofdog: "Tomasa" },
  { id: 3, breed: "Portuguese Podengo Pequeno", nameofdog: "Adrain" },
  { id: 4, breed: "Chilier", nameofdog: "Dion" },
  { id: 5, breed: "Pembroke Welsh Corgi", nameofdog: "Khalid" },
  { id: 6, breed: "Blue Lacy", nameofdog: "Vernie" },
  { id: 7, breed: "American Eskimo Dog", nameofdog: "Hayley" },
  { id: 8, breed: "Labrastaff", nameofdog: "Dessie" },
  { id: 9, breed: "German Spitz", nameofdog: "Amaya" },
  { id: 10, breed: "Dandie Dinmont Terrier", nameofdog: "Charles" },
  { id: 11, breed: "Doodle", nameofdog: "Charles" },
];

const PersonStub: Array<Person> = [
  {
    id: 1,
    firstname: "Phyllis",
    lastname: "McKenzie",
    dogs: [{ id: 2, breed: "Chorkie", nameofdog: "Tomasa" }],
  },
  {
    id: 2,
    firstname: "Zane",
    lastname: "Dickens",
    dogs: [{ id: 3, breed: "Portuguese Podengo Pequeno", nameofdog: "Adrain" }],
  },
  {
    id: 3,
    firstname: "Camren",
    lastname: "Yundt",
    dogs: [{ id: 4, breed: "Chilier", nameofdog: "Dion" }],
  },
  {
    id: 4,
    firstname: "Ervin",
    lastname: "Paucek",
    dogs: [{ id: 5, breed: "Pembroke Welsh Corgi", nameofdog: "Khalid" }],
  },
  {
    id: 5,
    firstname: "Omer",
    lastname: "Ledner",
    dogs: [{ id: 6, breed: "Blue Lacy", nameofdog: "Vernie" }],
  },
  {
    id: 6,
    firstname: "Annie",
    lastname: "Hegmann",
    dogs: [{ id: 7, breed: "American Eskimo Dog", nameofdog: "Hayley" }],
  },
  {
    id: 7,
    firstname: "Kaycee",
    lastname: "Hyatt",
    dogs: [{ id: 8, breed: "Labrastaff", nameofdog: "Dessie" }],
  },
  {
    id: 8,
    firstname: "Daphnee",
    lastname: "Schimmel",
    dogs: [{ id: 9, breed: "German Spitz", nameofdog: "Amaya" }],
  },
  {
    id: 9,
    firstname: "Meggie",
    lastname: "O'Conner",
    dogs: [{ id: 10, breed: "Dandie Dinmont Terrier", nameofdog: "Charles" }],
  },
  {
    id: 10,
    firstname: "Keven",
    lastname: "Watsica",
    dogs: [{ id: 11, breed: "Keeshond", nameofdog: "Shanelle" }],
  },
];

describe("PersonProfileComponent", () => {
  let component: PersonProfileComponent;
  let fixture: ComponentFixture<PersonProfileComponent>;
  let mockPersonService: DummyPersonsService;
  let el: DebugElement;

  beforeEach(async(() => {
    //mockPersonService = jasmine.createSpyObj('DummyPersonService',["getAll"]);


    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      providers: [
        PersonProfileComponent,
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { data: PersonStub[0] } },
        },
        {
          provide: DummyPersonsService,
          useValue : {getAll: ()=>{ subscribe: ()=>{
            PersonStub
          }}}
        }
      ],

    }).compileComponents().then(()=>{
      fixture = TestBed.createComponent(PersonProfileComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      mockPersonService = TestBed.inject(DummyPersonsService);
    });

  }));

  it("Should create the comoponent", ()=>{
    expect(component).toBeTruthy();
  });



  it("The name of the first user should be Tomasa", ()=>{
    pending();
  })


  it("Should be a true component", () => {
    expect(component).toBeTruthy();
  });

  // it("Should have a list that is displayed in the DOM",fakeAsync(()=>{

  //   component.personInfo = PersonStub[0];
  //   component.personInfoDog = PersonStub[0].dogs[0];
  //   expect(component.personInfo.dogs).toBeTruthy();
  //   component.friendListofDogs = PersonStub;
  //   console.log(component.friendListofDogs)
  //   expect(component.friendListofDogs).toBeTruthy();
  //   component.ngOnInit();
  //   tick(5000);
  //  fixture.detectChanges();

  // }));



});
