import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FullCalendarModule } from 'ng-fullcalendar';

import { AppRoutingModule ,routingComponets} from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import {FormsModule} from '@angular/forms'
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { AboutComponent } from './about/about.component';

import { EventsComponent } from './events/events.component';
import { NewsComponent } from './news/news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { PaymentService } from './payment/payment.service';
import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase} from 'angularfire2/database';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { TestingTComponent } from './testing-t/testing-t.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterModule } from "@angular/router";
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ListuserComponent } from './listuser/listuser.component';
import { UserFormComponent } from './userform/userform.component';
import { UserService } from './shared_service/user.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RotaryAccessComponent } from './rotary-access/rotary-access.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { FileDropDirective } from './file-drop.directive';
import { UploadComponent } from './upload/upload.component';
import { UploadService } from './upload.service';
var config = {
  apiKey: "AIzaSyDD-lMIMOgRDZlwnE4CWWrrK3X8nThvemw",
  authDomain: "rotaryclub-12648.firebaseapp.com",
  databaseURL: "https://rotaryclub-12648.firebaseio.com",
  projectId: "rotaryclub-12648",
  storageBucket: "rotaryclub-12648.appspot.com",
  messagingSenderId: "172400543129"
};

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    AboutComponent,
   
   
   routingComponets,
   
   
    EventsComponent,
   
    NewsComponent,
   
   
    TestingTComponent,
   
    ListuserComponent,
   
   UserFormComponent,
   
   AddEmployeeComponent,
   
   EmployeeComponent,
   
   LoginComponent,
   
   LogoutComponent,
   
   RotaryAccessComponent,
   
   UploadFormComponent,
   
   FileDropDirective,
   
   UploadComponent ,
    
  
    
  
  ],
  imports: [
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyDD-lMIMOgRDZlwnE4CWWrrK3X8nThvemw",
      authDomain: "rotaryclub-12648.firebaseapp.com",
      databaseURL: "https://rotaryclub-12648.firebaseio.com",
      projectId: "rotaryclub-12648",
      storageBucket: "rotaryclub-12648.appspot.com",
      messagingSenderId: "172400543129"
    }),
    RouterModule, BrowserAnimationsModule,
    AppRoutingModule ,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FullCalendarModule,
    BrowserModule, FormsModule , HttpClientModule ,
    AngularFireDatabaseModule,              
    AngularFireAuthModule  , AppRoutingModule,   TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ], 
 
  providers: [PaymentService,UserService,UploadService],
  bootstrap: [AppComponent] , 
  exports: []
})

export class AppModule { }
