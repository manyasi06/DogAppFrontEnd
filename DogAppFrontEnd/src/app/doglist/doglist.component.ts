import { Dogs } from './../models/Dogs';
import { Component, OnInit } from '@angular/core';
import { DogsService } from '../services/dogs.service';
import { error } from 'protractor';


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
        },
        (error: Error)=>{
          console.log("An error occurred");
          console.log(error.message);
        }
      )

  }


  deleteDog(id: number): void{
    console.log("This current id: " + id);
    this.dogServ.deleteDog(id).subscribe(
      (response: Response)=>{
      console.log(response.status);
     },(error: any)=>{
       console.log("Error during deletion: " + error);
     }
    )

  }


}
