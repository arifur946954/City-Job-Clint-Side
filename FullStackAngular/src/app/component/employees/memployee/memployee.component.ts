import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Memployee } from 'src/app/model/List/Memployee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-memployee',
  templateUrl: './memployee.component.html',
  styleUrls: ['./memployee.component.css']
})
export class MEmployeeComponent implements OnInit {
  listData:Memployee={
    id:0,
    mobileNumber:'',
    email:'',



    birthDate:new Date(),
    employeeAddresses:{
      Id:0,
      employeeId:0,
      presentAddresses:[
        {
        Id:0,
        town:'',
        village:'',
        employeeAddressId:0
      },
      {
        Id:0,
        town:'',
        village:'',
        employeeAddressId:0
      }
    ]

    }


  }
  // isEmailInvalid(): boolean {
  //   return !this.listData.email;
  // }

  constructor(private employeeService:EmployeesService, private router:Router) {}

  ngOnInit(): void {
  }

  addListEmp(){



    this.employeeService.AddListData(this.listData).subscribe({
      next:(employeee)=>{
        console.log(employeee);
        this.router.navigate(['employees']);
      }
      
    })
  }

}
