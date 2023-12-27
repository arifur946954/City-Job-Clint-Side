import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './component/employees/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeesComponent } from './component/employees/add-employees/add-employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './component/employees/edit-employee/edit-employee.component';
import { TestOneComponent } from './component/employees/test-one/test-one.component';
import { MEmployeeComponent } from './component/employees/memployee/memployee.component';
import { RegisterComponent } from './component/employees/register/register.component';
import { LoginComponent } from './component/employees/login/login.component';
import { LoginDesignComponent } from './component/login-design/login-design.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeesComponent,
    EditEmployeeComponent,
    TestOneComponent,
    MEmployeeComponent,
    RegisterComponent,
    LoginComponent,
    LoginDesignComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
