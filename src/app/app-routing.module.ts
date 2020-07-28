import { PersonProfileComponent } from "./person-profile/person-profile.component";
import { LoginPageComponent } from "./login-page/login-page.component";
import { UploadDogComponent } from "./upload-dog/upload-dog.component";
import { CreatedogComponent } from "./createdog/createdog.component";
import { DoglistComponent } from "./doglist/doglist.component";
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonServiceResolve } from './services/personserviceresolve';

const routes: Routes = [
  { path: "login-page", component: LoginPageComponent },
  { path: "dogs-list", component: DoglistComponent },
  { path: "createdog", component: CreatedogComponent },
  { path: "add-image", component: UploadDogComponent },
  { path: "profile-page", component: PersonProfileComponent,
      resolve: { person: PersonServiceResolve }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [PersonServiceResolve]
})
export class AppRoutingModule {}
