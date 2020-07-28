import { DogsService } from "./../services/dogs.service";
import { Dogs } from "./../models/Dogs";
import { DummyPersonsService } from "./../services/dummy-persons.service";
import { Person } from "./../models/Person";
import { pipe } from "rxjs";

import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-person-profile",
  templateUrl: "./person-profile.component.html",
  styleUrls: ["./person-profile.component.css"],
})
export class PersonProfileComponent implements OnInit {
  personInfo: Person = new Person();
  profilePhoto;
  logStatus: boolean;
  friendListofDogs: Array<Dogs>;

  constructor(private route: ActivatedRoute) {
    this.logStatus = false;
  }

  ngOnInit(): void {
    /*
    this.personService.getById(2).subscribe((Response: Person) => {
      this.personInfo = Response;

    });
    */

    this.personInfo = this.route.snapshot.data['person'];
  }
}
