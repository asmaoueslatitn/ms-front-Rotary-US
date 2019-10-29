import { Component } from '@angular/core';
import { UploadService } from '../upload.service';
import { Upload } from '..//upload';
import * as _ from "lodash";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent {
  constructor(private router : Router ,private httpclient:HttpClient) { }
  image ; 
  etu = {
    id: null , 
    name : 'new' , 
    pic : this.image , 
   type : 'jpg'

  }

  ngOnInit() {
  
} 
}