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
import { CommonModule } from '@angular/common'


@NgModule({
  declarations: [
    AppComponent,
    DoglistComponent,
    CreatedogComponent,
    AlertComponent,
    UploadDogComponent,
    LoginPageComponent,
    PersonProfileComponent,
    TabForInfoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR})
  ],
  providers: [PersonServiceResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
