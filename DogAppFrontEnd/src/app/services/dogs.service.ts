import { ConfigService } from './config.service';
import { Dogs } from './../models/Dogs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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


}
