import { Person } from './../models/Person';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyPersonsService {

  url: string = "http://localhost:3000/persons/"
  constructor(private http: HttpClient) { }

  getAll():Observable<Array<Person>>{
   return this.http.get<Array<Person>>(this.url);
  }


  getById(id: number):Observable<Person>{
    return this.http.get<Person>(this.url + "id");
  }

  createPerson(person: Person):Observable<Response>{
    return this.http.post<Response>(this.url,person);
  }


  deletePerson(id: number):Observable<Response>{
    return this.http.delete<Response>(this.url + "id");
  }
}
