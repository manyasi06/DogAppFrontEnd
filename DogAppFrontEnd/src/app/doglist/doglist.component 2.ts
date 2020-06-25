import { Dogs } from './../models/Dogs';
import { Component, OnInit } from '@angular/core';
import { DogsService } from '../services/dogs.service';


@Component({
  selector: 'app-doglist',
  templateUrl: './doglist.component.html',
  styleUrls: ['./doglist.component.css']
})
export class DoglistComponent implements OnInit {

  public listofDogs: Dogs[];

  constructor(private dogServ: DogsService) { }

  ngOnInit() {
      this.dogServ.getAllDogs().subscribe(
        (data: Dogs[])=>{
          console.log(data);
          this.listofDogs = data;
        }
      )

  }


}
