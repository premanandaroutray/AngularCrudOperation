import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard/auth-guard.service';
import { DepartmentComponentComponent } from './components/department-component/department-component.component';
import { EmployeeComponentComponent } from './components/employee-component/employee-component.component';
import { HomeLayoutComponentComponent } from './components/home-layout-component/home-layout-component.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'ems', component: HomeLayoutComponentComponent,canActivate: [AuthGuardService], children: [
      {path:'home',component:HomeComponent,canActivate: [AuthGuardService]},
      { path: 'employee', component: EmployeeComponentComponent,canActivate: [AuthGuardService] },
      { path: 'department', component: DepartmentComponentComponent,canActivate: [AuthGuardService] },

    ]

  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
