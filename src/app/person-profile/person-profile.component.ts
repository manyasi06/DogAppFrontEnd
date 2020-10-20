import { Observable } from 'rxjs';
import { Dogs } from './../models/Dogs';
import { DummyPersonsService } from "./../services/dummy-persons.service";
import { Person } from "./../models/Person";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Data } from "@angular/router";



@Component({
  selector: "app-person-profile",
  templateUrl: "./person-profile.component.html",
  styleUrls: ["./person-profile.component.css"],
})
export class PersonProfileComponent implements OnInit {
  personInfo$: Person;
  personInfoDog: Dogs;
  profilePhoto;
  logStatus: boolean;
  friendListofDogs: Array<Person> = new Array<Person>();

  constructor(
    private route: ActivatedRoute,
    private dogFriends: DummyPersonsService,
    private router: Router
  ) {
    this.logStatus = false;
  }

  ngOnInit(): void {
    this.dogFriends.getById(3).subscribe((val: Person) => {
      this.personInfo$ = val;

      this.personInfoDog = this.personInfo$.dogs[0];
    });

  }




}
