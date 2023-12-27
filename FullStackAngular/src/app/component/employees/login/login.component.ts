import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/Employee/Login/Login.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  consoleMessages: string[] = [];
  loginForm!:FormGroup;
  errorMessage: string | null = null; 
loginRequest:Login={

    email:'',
    password:''
}
  constructor(private fb:FormBuilder, private employeeService:EmployeesService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:[' ',Validators.required],
      password:[' ',Validators.required],
    })
  }





  employeeLogin(){
   
    // Simulate a successful or failed login
    const isLoginSuccessful = Math.random() < .01;

    if (isLoginSuccessful) {
      this.addConsoleMessage('Login successful', 'success');
    } else {
      this.addConsoleMessage('Login failed: Incorrect email or password', 'error');
    }
    

    


    this.employeeService.LoginEmployee(this.loginRequest).subscribe({
      next:(employeee)=>{
       
       console.log(employeee);
       this.router.navigate(['employees/add']);
      }
      
    })
}



private addConsoleMessage(message: string, type: 'success' | 'error') {
  this.consoleMessages.push(message);
  // Optionally, you can limit the number of messages displayed or implement your logic.
}






}






