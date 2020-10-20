import { Person } from './../models/Person';
import { Observable, ObservableLike, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Dogs } from '../models/Dogs';

@Injectable({
  providedIn: 'root'
})
export class DummyPersonsService {

  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    responseType: 'text' as 'json',
    observe: "response" as 'body'
  }

   // Handle API errors
   handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  url: string = "http://localhost:3000/persons/"
  urlfriend: string = "http://localhost:3000/friends/"
  constructor(private http: HttpClient) { }

  getAll():Observable<Array<Person>>{
   return this.http.get<Array<Person>>(this.url).pipe(retry(2),catchError(this.handleError));
  }

  getAllFriends():Observable<Array<Dogs>>{
    return this.http.get<Array<Dogs>>(this.urlfriend).pipe(retry(2),catchError(this.handleError));
  }


  getById(id: number):Observable<Person>{
    return this.http.get<Person>(this.url + id).pipe(
      retry(2),catchError(this.handleError)
      );
  }

  createPerson(person: Person):Observable<Response>{
    return this.http.post<Response>(this.url,person).pipe(retry(2),catchError(this.handleError));
  }


  deletePerson(id: number):Observable<Response>{
    return this.http.delete<Response>(this.url + "id").pipe(retry(2),catchError(this.handleError));
  }


  modifyPerson(person: Person):Observable<Response>{
    return this.http.put<Response>(this.url,person).pipe(retry(2),catchError(this.handleError));
  }
}
