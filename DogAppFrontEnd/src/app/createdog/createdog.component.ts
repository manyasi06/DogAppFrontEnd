import { Router } from '@angular/router';
import { DogsService } from './../services/dogs.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';



export interface sumDog {
  id?: number;
  breed: string;
  nameofdog: string;
  ownerfirstname: string;
  ownerlastname: string;
}


@Component({
  selector: 'app-createdog',
  templateUrl: './createdog.component.html',
  styleUrls: ['./createdog.component.css']
})
export class CreatedogComponent implements OnInit {
  MyWarn: boolean;

  profileForm = new FormGroup({
    breed: new FormControl(''),
    nameofdog: new FormControl(''),
    ownerfirstname: new FormControl(''),
    ownerlastname: new FormControl(''),
  });

  constructor(private dogService: DogsService, private router: Router) { }

  ngOnInit(): void {
    this.MyWarn = false;
  }




  onSubmit():void{


    let obj = {
      "breed": this.profileForm.get("breed").value,
      "nameofdog": this.profileForm.get("nameofdog").value,
      "ownerfirstname": this.profileForm.get("ownerfirstname").value,
      "ownerlastname": this.profileForm.get("ownerlastname").value
    };

    this.dogService.createDog(obj).subscribe(
      (data: Response)=>{
      console.log(data);
      this.router.navigate(['/dogs-list']);
    },
    (error: any) => {
      console.log(error);
      this.router.navigate(['/dogs-list']);
  }
)



  }

}
