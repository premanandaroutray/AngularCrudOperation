import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeLayoutComponentComponent } from './components/home-layout-component/home-layout-component.component';
import { EmployeeComponentComponent } from './components/employee-component/employee-component.component';
import { DepartmentComponentComponent } from './components/department-component/department-component.component';
import { HomeComponent } from './components/home/home.component';
import { AddEditDepComponent } from './components/department-component/add-edit-dep/add-edit-dep.component';
import { ShowDepComponent } from './components/department-component/show-dep/show-dep.component';
import {  HttpClientModule } from '@angular/common/http';
import { AddEditEmpComponent } from './components/employee-component/add-edit-emp/add-edit-emp.component';
import { ShowEmpComponent } from './components/employee-component/show-emp/show-emp.component';
import { AuthGuardService } from './auth-guard/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeLayoutComponentComponent,
    EmployeeComponentComponent,
    DepartmentComponentComponent,
    HomeComponent,
    AddEditDepComponent,
    ShowDepComponent,
    AddEditEmpComponent,
    ShowEmpComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
