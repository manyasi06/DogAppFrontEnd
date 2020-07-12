import { ConfigService } from './config.service';
import { Dogs } from './../models/Dogs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  url: string;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.url = "api/dogs";
   }


  getAllDogs(){
      return this.http.get(this.url);
  }

  createDog(someDog: any){
    return this.http.post(this.url,someDog)
  }

  deleteDog(id: number){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body:{
        id: id
      },
      responseType: 'text' as 'json',
    }
    return this.http.delete(this.url +"/" + id, options);
  }

  editDog(someDog: Dogs){
    return this.http.put<Dogs>(this.url,someDog);
  }


}
