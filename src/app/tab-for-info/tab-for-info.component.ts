import { Dogs } from './../models/Dogs';
import { DummyPersonsService } from './../services/dummy-persons.service';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-tab-for-info',
  templateUrl: './tab-for-info.component.html',
  styleUrls: ['./tab-for-info.component.css']
})
export class TabForInfoComponent implements OnInit {
  active = 1;

  friendsList: Dogs[] = [];
  constructor(
    private dogFriends: DummyPersonsService,
  ) { }

  ngOnInit(): void {
    this.dogFriends.getAllFriends().subscribe(
      resp =>{
        this.friendsList = resp;
      }
    )

  }

}
