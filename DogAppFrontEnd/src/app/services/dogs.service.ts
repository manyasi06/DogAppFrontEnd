import { Dogs } from './../models/Dogs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = "api/dogs";
   }


  getAllDogs(){
      return this.http.get(this.url);
  }


}
