import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './component/employees/employee-list/employee-list.component';
import { AddEmployeesComponent } from './component/employees/add-employees/add-employees.component';
import { EditEmployeeComponent } from './component/employees/edit-employee/edit-employee.component';

import { TestOneComponent } from './component/employees/test-one/test-one.component';
import { MEmployeeComponent } from './component/employees/memployee/memployee.component';
import { RegisterComponent } from './component/employees/register/register.component';
import { LoginComponent } from './component/employees/login/login.component';
import { LoginDesignComponent } from './component/login-design/login-design.component';

const routes: Routes = [
  // {
  //   path:"",
  //   component:EmployeeListComponent
  // },
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"employees",
    component:EmployeeListComponent
  },
  {
    path:"employees/add",
    component:AddEmployeesComponent
  },
  {
    path:"employees/edit/:id",
    component:EditEmployeeComponent
  },
  {
    path:"employees/test",
    component:TestOneComponent
  },
  {
    path:"employees/mEmp",
    component:MEmployeeComponent
  },
  {
    path:"employees/register",
    component:RegisterComponent
  },
  {
    path:"employees/login",
    component:LoginComponent
  },
  {
    path:"employees/logindesign",
    component:LoginDesignComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
