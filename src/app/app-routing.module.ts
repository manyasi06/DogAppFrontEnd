import { LoginPageComponent } from './login-page/login-page.component';
import { UploadDogComponent } from './upload-dog/upload-dog.component';
import { CreatedogComponent } from './createdog/createdog.component';
import { DoglistComponent } from './doglist/doglist.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'login-page', component: LoginPageComponent},
  {path: 'dogs-list', component: DoglistComponent},
  {path: 'createdog', component: CreatedogComponent},
  {path:'add-image', component: UploadDogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
