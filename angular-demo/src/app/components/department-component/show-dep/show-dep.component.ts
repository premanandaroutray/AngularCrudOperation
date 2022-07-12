import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }
  departmentList:any=[];
  ModalTitle:string='';
  ActivateAddEditDepComp:boolean=false;
  dep:any;
  ngOnInit(): void {
    this.getDepartment();
  }
  addClick(){
    this.dep={
    DepartmentId:0,
    DepartmentName:""
    }
    
    this.ModalTitle="Add Department";
    this.ActivateAddEditDepComp=true;
      }
      closeClick(){
        this.ActivateAddEditDepComp=false;
        this.getDepartment();
      }
      editClick(item:any){
 
    
        this.dep=item;
        this.ModalTitle="Edit Department";
        this.ActivateAddEditDepComp=true;
      }
      deleteClick(item:any)
      {
    if(confirm("Are you sure to Delete ?"))
    {
    this.service.deleteDepartment(item.DepartmentId).subscribe(res=>{
      alert(res.toString());
      
    })
    this.getDepartment();
    }
      }
      getDepartment(){
        this.service.getDepartmentList().subscribe(data=>{
          this.departmentList=data;
        })
      }
}
