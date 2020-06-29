import { CreatedogComponent } from './createdog/createdog.component';
import { DoglistComponent } from './doglist/doglist.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'dogs-list', component: DoglistComponent},
  {path: 'createdog', component: CreatedogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
