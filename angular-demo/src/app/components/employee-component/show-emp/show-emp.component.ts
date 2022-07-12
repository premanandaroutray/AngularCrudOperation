import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {
  employeeList:any=[];
  ModalTitle:string='';
  ActivateAddEditEmpComp:boolean=false;
  emp:any;
  constructor(private service:SharedService) { }
 
  ngOnInit(): void {
    this.getEmployee();
  }
  addClick(){
    this.emp={
    EmployeeId:0,
    EmployeeName:"",
    Department:"",
    DateOfJoining:"",
    PhotoFileName:"profile.png"
    }
    
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;
      }
      closeClick(){
        this.ActivateAddEditEmpComp=false;
        this.getEmployee();
      }
      editClick(item:any){
     
        
        this.emp=item;
        this.ModalTitle="Edit Employee";
        this.ActivateAddEditEmpComp=true;
      }
      deleteClick(item:any)
      {
    if(confirm("Are you sure to Delete ?"))
    {
    this.service.deleteEmployee(item.EmployeeId).subscribe(res=>{
      alert(res.toString());
      
    })
    this.getEmployee();
    }
      }
      getEmployee(){
        this.service.getEmployeeList().subscribe(data=>{
          this.employeeList=data;
        })
      }
}
