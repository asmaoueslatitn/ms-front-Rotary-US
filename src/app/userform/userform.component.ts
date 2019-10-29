import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../shared_service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserFormComponent implements OnInit {
  private user:User;



  constructor(private _userService:UserService,private _rotuer:Router) { }

  ngOnInit() {
    this.user=this._userService.getter();
  }

  processForm(){
    if(this.user.id==undefined){
       this._userService.createUser(this.user)
    }else{
       this._userService.updateUser(this.user).subscribe((user)=>{
         console.log(user);
         this._rotuer.navigate(['/op']);
       },(error)=>{
         console.log(error);
       });
    }
  }

}
