import { TabForInfoComponent } from './tab-for-info/tab-for-info.component';
import { PersonServiceResolve } from './services/personserviceresolve';
import { UploadDogComponent } from './upload-dog/upload-dog.component';
import { AlertComponent } from './shared/alert/alert.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoglistComponent } from './doglist/doglist.component';
import { CreatedogComponent } from './createdog/createdog.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { PersonProfileComponent } from './person-profile/person-profile.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { CommonModule } from '@angular/common';
import { PictureModalComponent } from './picture-modal/picture-modal.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    DoglistComponent,
    CreatedogComponent,
    AlertComponent,
    UploadDogComponent,
    LoginPageComponent,
    PersonProfileComponent,
    TabForInfoComponent,
    PictureModalComponent,
    CreateProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    MatStepperModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR,
    }),
    BrowserAnimationsModule,
  ],
  providers: [PersonServiceResolve],
  bootstrap: [AppComponent],
})
export class AppModule {}
