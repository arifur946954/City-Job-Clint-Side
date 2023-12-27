import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { testEmpl } from 'src/app/model/testEmpl.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.css']
})
export class TestOneComponent implements OnInit {
  testOne :testEmpl={
 Id:0,
 mobileNumber:'',
 email:'',
 employeeAddresses:{Id:0,employeeId:0,
//Present Address
presentAddresses:{ Id:0,village:'', employeeAddressId:0},

parmanentAddresses:{Id:0,village:'',employeeAddressId:0},
 

 },
  };



  constructor(private employeeService:EmployeesService, private router:Router) { }

  ngOnInit(): void {}

 

  




addTestOne(){
  this.employeeService.AddTest(this.testOne).subscribe({
    next:(employeee)=>{
      console.log(employeee);
      this.router.navigate(['employees']);
    }
    
  })
}

}
