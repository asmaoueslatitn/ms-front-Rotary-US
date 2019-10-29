import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { ContactComponent } from './contact/contact.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UserFormComponent } from './userform/userform.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RotaryAccessComponent } from './rotary-access/rotary-access.component';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
 
    { path: "home", component: HomeComponent },
    { path: "donate", component: PaymentComponent },
    { path: "contactUs", component: ContactComponent },
    {path:'list', component:ListuserComponent},
    {path:'listem', component: EmployeeComponent},
    { path:'add', component: AddEmployeeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'rotaryAccess', component: RotaryAccessComponent } ,
    { path: 'welcomeToRetaryClub', component: AppComponent },
    { path: 'calender', component: RotaryAccessComponent },
    { path: 'achievements', component: EventsComponent },
    
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export  const routingComponets = [HomeComponent,PaymentComponent,ContactComponent,EmployeeComponent,AddEmployeeComponent] ; 