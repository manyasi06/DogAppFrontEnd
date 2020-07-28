import { DummyPersonsService } from './dummy-persons.service';
import { PersonsService } from './persons.service';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class PersonServiceResolve implements Resolve<any>{

    constructor(private personService: DummyPersonsService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
      let id = 2;
      return this.personService.getById(id);
    }
}
