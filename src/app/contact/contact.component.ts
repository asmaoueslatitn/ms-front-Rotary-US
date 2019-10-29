
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms'; 
import { Router } from '@angular/router';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  etud = { 
    id : null ,
    nom : "test" ,
    email :"test" , 
   
    subject: null , 
    why : "pl"
  }
  user_name 
  user_email
  user_subject
  user_message
namem=this.user_name
emailam=this.user_email 
subjectm=this.user_subject
messagem=this.user_message


  constructor(private router : Router ,private httpclient:HttpClient) { }
 
  ngOnInit() {
  }


 
  processForm()
  {
   this.etud = { 
    id : null ,
    nom : this.user_name ,
    email :this.user_email  , 
    why : this.user_subject ,
    subject: this.user_message 
  
    }
  
    this.httpclient.post("http://localhost:8080/etudiants",this.etud).subscribe (
      err=> {
        console.log(err) ; 
      }
      
      
      );
      const allInfo = `thank you  ${this.user_name}. you request has been processed to the president `;
      alert(allInfo);
      this.httpclient.get("http://localhost:8080/sendMail").subscribe (
      err=> {
        console.log(err) ; 
      }
      
      
      );
  }


}















