import { Person } from './../models/Person';
import { PersonsService } from './../services/persons.service';
import { Component, OnInit } from '@angular/core';
import { faker } from '../../../node_modules/faker'


@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.css']
})
export class PersonProfileComponent implements OnInit {


  personList: Person[];
  profilePhoto;
  logStatus: boolean;

  constructor(private personService: PersonsService, private faker: faker) {
    this.logStatus = false;

   }

  ngOnInit(): void {
    this.personService.getAllPersons().subscribe(
      (data: Person[]) => {
        this.personList = data;
      }
    )
  }

}
