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
  personInfo: Person = new Person();
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
    //this.personInfo = this.route.snapshot.data['person'];
    this.dogFriends.getById(3).subscribe((val: Person) => {
      this.personInfo = val;

      this.personInfoDog = this.personInfo.dogs[0];
      console.log(this.personInfo.dogs[0]);
    });

    // this.route.data.subscribe(
    //   (data: Data) => {
    //     this.personInfo = data['person'];
    //   }
    //)
    this.getFriends();
  }

  getFriends(){
        this.dogFriends.getAll().subscribe( (resp)=>{
          resp.forEach((val)=>{
           this.friendListofDogs.push(val);
          })
       })

  }


}
