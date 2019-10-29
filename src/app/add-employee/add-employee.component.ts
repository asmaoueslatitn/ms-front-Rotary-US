import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {
  autoInc: any=1 ;
 
  user: Employee = new Employee(this.autoInc,"","",null);
 
 
  constructor(
    private httpClientService: HttpClientService,private _rotuer:Router
  ) { }

  ngOnInit() {
  }

  createEmployee(): void {
    this.autoInc++ 
    this.httpClientService.createEmployee(this.user)
        .subscribe( data => {
          alert("Employee created successfully.");
          this._rotuer.navigate(['/listem']);
        });
        
  };

}
	