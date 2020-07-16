import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  myForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })


  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm):void{
    console.log(form.value)
  }

}
