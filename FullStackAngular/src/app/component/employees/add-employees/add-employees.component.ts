import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employees } from 'src/app/model/Employee/EmployeeMain/Employees.model';

import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})


export class AddEmployeesComponent implements OnInit {
  addEmployeeRequest:Employees={
    id:0,
    mobileNumber:'',
    name:'',
    fatherName:' ',
    motherName:'',
    nid:'',
    dateOfBirth:new Date,
    birthPlace:'',
    religion:'',
    bloodGroup:'',
    maritalStatus:'',
    email:'',
    employeeAddresses:{
      id:0,employeeId:0,

presentAddresses:{
        id:0,
        village:'',
        postOffice:'',
        policeStation:'',
        district:'',
        employeeAddressId:0},

parmanentAddresses:{
        id:0,
        village:'',
        postOffice:'',
        policeStation:'',
        district:'',
        employeeAddressId:0}
},


    interviewDare:new Date,
    appliedPost:'',
    joiningDate:new Date,
    expectedSelary:0,
    appliedBy:'',

  accademicQualifications:[
  {id:0, degree:'',  university:'', instution:'',major:'',result:0,passingYear:'',employeeId:0},
  {id:0, degree:'',  university:'', instution:'',major:'',result:0,passingYear:'',employeeId:0},
  {id:0, degree:'',  university:'', instution:'',major:'',result:0,passingYear:'',employeeId:0}

  ],
  workExperiences:[
    {id:0, post:'',organization:'',jobLocation:'',selary:0,reportingTo:'',defaultProduct:'',employeeId:0},
    {id:0,post:'',organization:'',jobLocation:'',selary:0,reportingTo:'',defaultProduct:'',employeeId:0},
    {id:0,post:'',organization:'',jobLocation:'',selary:0,reportingTo:'',defaultProduct:'',employeeId:0},
    {id:0,post:'',organization:'',jobLocation:'',selary:0,reportingTo:'',defaultProduct:'',employeeId:0},
    {id:0,post:'',organization:'',jobLocation:'',selary:0,reportingTo:'',defaultProduct:'',employeeId:0}
  ]
   


  }

  constructor(private employeeService:EmployeesService, private router:Router) { }

  ngOnInit(): void {
  }
  addEmployee(){
    this.employeeService.addEmployee(this.addEmployeeRequest).subscribe({
      next:(employee)=>{
        console.log(employee);
        this.router.navigate(['employees']);
      }
    })
  }

}
