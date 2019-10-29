import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';




@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  listFormations ;
  listEtudiants ; 
  listImages;
  currentFormation= {id:-1} ; 
  imageData: any;
  sanitizer:  DomSanitizer;
  ResponseContentType ; 
  imageToShow: string | ArrayBuffer;
  currentImage: any;
  authService: any;
  unsafeImageUrl  ;
  imageUrl  ;
  etud = { 
    id : null ,
    name : "test" ,
    lasname : "test" , 
    date : null ,
    form: null
  }

  constructor(private httpclient :HttpClient) { }

  ngOnInit() {
   

    this.httpclient.get ("http://localhost:8080/formations").subscribe (data=> 
    {
      this.listFormations=data
    },
    err=> {
      console.log(err) ; 
    }
    
    
    );
   
    this.httpclient.get ("http://localhost:8080/imageModels").subscribe (data=> 
    {
      this.listImages=data },
    err=> {
      console.log(err) ; 
    }
    
    
    );

   


    
  }




















  

  

  onGetEtudiants(f)
  {
    this.currentFormation=f ; 
    this.httpclient.get ("http://localhost:8080/formations/"+f.id+"/etudiants").subscribe (data=> 
    {
      this.listEtudiants=data
    },
    err=> {
      console.log(err) ; 
    }
    
    
    );
  }
 
  
onSetEtudiants()
  {
    
    this.httpclient.post ("http://localhost:8080/etudiants",this.etud).subscribe (
    err=> {
      console.log(err) ; 
    }
    
    
    );
  }
 
  

    


 












}
