import { Component, OnInit } from '@angular/core';


import { HttpClientService, Employee } from '../service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
   
  constructor(
    private httpClientService: HttpClientService , private _router : Router 
  ) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
     response =>{this.employees = response;}
    );
  }

  deleteEmployee(employee: Employee): void {
    this.httpClientService.deleteEmployee(employee)
      .subscribe( data => {
        this.employees = this.employees.filter(u => u !== employee);
      })
  };
  newMember(){
    

      this._router.navigate(['/add']);
    
    }
    return(){
    

      this._router.navigate(['/home']);
    
    }
}
