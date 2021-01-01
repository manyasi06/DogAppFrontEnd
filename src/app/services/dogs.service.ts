
import { Dogs } from './../models/Dogs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  url: string;
  urlPics: string;

  constructor(private http: HttpClient) {
    this.url = "api/dogs";
    this.urlPics ="api/photos"
   }


  getAllDogs(): Observable<Dogs[]>{
      return this.http.get<Dogs[]>(this.url);
  }

  createDog(someDog: any){
    return this.http.post(this.url,someDog)
  }

  deleteDog(id: number) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body:{
        id
      },
      responseType: 'text' as 'json',
      observe: "response" as 'body'
    }
    return this.http.delete(this.url +"/" + id, options,);
  }

  editDog(someDog: Dogs): any{
    console.log(someDog);
    return this.http.put<any>(this.url,someDog);
  }

  uploadDataPics(formData){
    return this.http.post<any>(this.urlPics + "/add",formData,{
      reportProgress: true,
      observe: 'response',
      responseType: 'text' as 'json'
    });
  }

  getDogById(id: number): Observable<Dogs>{
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

    return this.http.get<Dogs>(this.url + '/' + id, options);
  }


}
