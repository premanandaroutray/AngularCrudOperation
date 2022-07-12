import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly apiEndPoint='http://localhost:5187/api';
  readonly photoPath='http://localhost:5187/Photos'
  isLoggeIn:boolean=false;
  constructor(private http:HttpClient) { }
  getDepartmentList():Observable<any>{
    return this.http.get<any[]>(this.apiEndPoint+'/Department');
      }
      addDepartment(val:any){
    return this.http.post(this.apiEndPoint+'/Department',val)
      }
      updateDepartment(val:any)
      {
        return  this.http.put(this.apiEndPoint+'/Department',val)
      }
      deleteDepartment(val:any)
      {
        return this.http.delete(this.apiEndPoint+'/Department/'+val)
      }
      getEmployeeList():Observable<any[]>{
        return this.http.get<any[]>(this.apiEndPoint+'/Employee');
          }
          addEmployee(val:any){
        return this.http.post(this.apiEndPoint+'/Employee',val)
          }
          updateEmployee(val:any)
          {
            return this.http.put(this.apiEndPoint+'/Employee',val)
          }
          deleteEmployee(val:any)
          {
            return this.http.delete(this.apiEndPoint+'/Employee/'+val)
          }
          uploadPhot(val:any)
          {
            return this.http.post(this.apiEndPoint+'/Employee/SaveFile',val)
          }
          getDepartmentNames():Observable<any[]>{
              return this.http.get<any[]>(this.apiEndPoint+'/Employee/GetAllDepartment')
          }
         
}
