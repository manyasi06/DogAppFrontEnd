import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent implements OnInit {
  myForm: FormGroup;
  username = new FormControl("", Validators.required);
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      username: this.username,
      password: ["", Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.myForm);
  }
}
