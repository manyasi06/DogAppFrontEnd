import { DummyPersonsService } from './../services/dummy-persons.service';
import { Person } from "./../models/Person";
import { Component, OnInit } from "@angular/core";
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
  friendListofDogs: Array<Person> = new Array<Person>();

  constructor(private route: ActivatedRoute, private dogFriends: DummyPersonsService) {
    this.logStatus = false;
  }

  ngOnInit(): void {
    this.personInfo = this.route.snapshot.data['person'];

    this.dogFriends.getAll().subscribe( (resp)=>{
        resp.forEach((val)=>{
          this.friendListofDogs.push(val);
        })
    })
  }

}
