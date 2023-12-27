import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/model/Employee/Register/Register.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerRequest:Register={
    id:0,
    mobileNumber:'',
    name:'',
    email:'',
    password:''
  }

  constructor(private employeeService:EmployeesService, private router:Router) { }

  ngOnInit(): void {
  }

  employeeRegister(){
    this.employeeService.registerEmployee(this.registerRequest).subscribe({
      next:(employeee)=>{
        console.log(employeee);
        this.router.navigate(['employees/add']);
      }
      
    })
  }

}
