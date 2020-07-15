import { ConfigService } from './config.service';
import { Dogs } from './../models/Dogs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  url: string;
  urlPics: string;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.url = "api/dogs";
    this.urlPics ="api/photos"
   }


  getAllDogs(){
      return this.http.get(this.url);
  }

  createDog(someDog: any){
    return this.http.post(this.url,someDog)
  }

  deleteDog(id: number):any {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body:{
        id: id
      },
      responseType: 'text' as 'json',
      observe: "response" as 'body'
    }
    return this.http.delete<any>(this.url +"/" + id, options,);
  }

  editDog(someDog: Dogs){
    return this.http.put<Dogs>(this.url,someDog);
  }

  uploadDataPics(formData){
    return this.http.post<any>(this.urlPics + "/add",formData,{
      reportProgress: true,
      observe: 'response',
      responseType: 'text' as 'json'
    });
  }


}
