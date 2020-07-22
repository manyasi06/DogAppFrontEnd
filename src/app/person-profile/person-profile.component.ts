import { Person } from './../models/Person';
import { PersonsService } from './../services/persons.service';
import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';


@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.css']
})
export class PersonProfileComponent implements OnInit {


  personList: Person[];

  constructor(private personService: PersonsService) { }

  ngOnInit(): void {
    this.personService.getAllPersons().subscribe(
      (data: Person[]) => {
        this.personList = data;
      }
    )
  }

}
