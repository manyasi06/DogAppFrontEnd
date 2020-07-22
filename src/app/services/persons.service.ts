import { Observable } from 'rxjs';
import { Person } from './../models/Person';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  url = '/api/dogs/user';

  constructor(private http: HttpClient) {}


  getAllPersons(): Observable<Person[]>{
    return this.http.get<Person[]>('api/dog/user');
  }


}
