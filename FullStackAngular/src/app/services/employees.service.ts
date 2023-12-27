import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';
import { testEmpl } from '../model/testEmpl.model';
import { Memployee } from '../model/List/Memployee.model';
import { Employees } from '../model/Employee/EmployeeMain/Employees.model';
import { Register } from '../model/Employee/Register/Register.model';
import { Login } from '../model/Employee/Login/Login.model';



@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseApiUrl:string=environment.baseApiUrl;


  constructor(private http:HttpClient) { }
  //get all employee

  getAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl+'/api/Employee');

  }
 //Register all employee

 registerEmployee(addEmployeeRequest:Register):Observable<Register>{
  return this.http.post<Register>(this.baseApiUrl + '/api/Employee/register',addEmployeeRequest);
}

//Register all employee

LoginEmployee(addEmployeeRequest:Login):Observable<Login>{
  return this.http.post<Login>(this.baseApiUrl + '/api/Employee/login',addEmployeeRequest);
}


  //add employee

  addEmployee(addEmployeeRequest:Employees):Observable<Employees>{
    return this.http.post<Employees>(this.baseApiUrl + '/api/Employee',addEmployeeRequest);
  }

  //get single employee

  getEmployee(id:number):Observable<Employee>{
    return this.http.get<Employee> (this.baseApiUrl + '/api/employee/'+id);
  }
  
  //Update Employee
  updateEmployee(id:number,updateEmployeeRequest:Employee):Observable<Employee>{
return this.http.put<Employee>(this.baseApiUrl + '/api/employee/'+id,updateEmployeeRequest)
  }

//Job form add
AddTest(testOne:testEmpl):Observable<testEmpl>{
  return this.http.post<testEmpl>(this.baseApiUrl+ '/api/Employee',testOne);
}

//List data send to database
AddListData(listData:Memployee):Observable<Memployee>{
  return this.http.post<Memployee>(this.baseApiUrl+ '/api/Employee',listData);
}


}
