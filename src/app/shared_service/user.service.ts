import { Injectable } from '@angular/core';
import{HttpClient, HttpResponse, HttpHeaders,HttpRequest} from '@angular/common/http';
import{Observable}   from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import{User}  from '../user';
import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";
import{ Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class UserService {
  private baseUrl:string='http://localhost:8080/api';
  private headers = new HttpHeaders({'Content-Type':'application/json'});
  private user = new User();
 
etud = { 
  id : null ,
  fname : "test" ,
  lname : "test" , 
  
}

  constructor(private _http:HttpClient) { }

  getUsers(){

    return this._http.get(this.baseUrl+'/users').map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  getUser(id:Number){

    return this._http.get(this.baseUrl+'/user/'+id).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  deleteUser(id:Number){

    return this._http.delete(this.baseUrl+'/user/'+id).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }


  createUser(user:User){

   
    this._http.post ("http://localhost:8080/users",this.etud).subscribe (
      err=> {
        console.log(err) ; 
      }
      
      
      );
  
    
    
  }
   
   updateUser(user:User){

    return this._http.put(this.baseUrl+'/user',JSON.stringify(user)).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  
  errorHandler(error:Response){

     return Observable.throw(error||"SERVER ERROR");
  }

   setter(user:User){
     this.user=user;
   }

  getter(){
    return this.user;
  }
}