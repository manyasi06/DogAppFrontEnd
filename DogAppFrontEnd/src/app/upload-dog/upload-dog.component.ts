import { HttpClient } from "@angular/common/http";
import { DogsService } from "./../services/dogs.service";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { error } from "protractor";

@Component({
  selector: "app-upload-dog",
  templateUrl: "./upload-dog.component.html",
  styleUrls: ["./upload-dog.component.css"],
})
export class UploadDogComponent implements OnInit {
  @ViewChild("myForm", { static: false }) fileUpload: ElementRef;
  public mytitle: string;
  @ViewChild("file") myfile: Blob;

  constructor(private dogServ: DogsService, private http: HttpClient) {
  }

  ngOnInit(): void {}

  onFileChange(event) {
    this.myfile = event.target.files[0];
  }


  //TODO fix the issue regarding the title not being the proper name at all.
  onSubmit() {
    let formData = new FormData();
    const uploadtitle = this.mytitle;
    console.log('Current title: ' + this.mytitle)
    formData.append('title', this.mytitle);
    formData.append("image", this.myfile);


    this.dogServ.uploadDataPics(formData).subscribe(
      (rep: any) => {
        console.log(rep);
      },
      (err: Error) => {
        console.log(err);
      }
    );
  }
}
