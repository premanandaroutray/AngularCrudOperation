import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {
  @Input() emp:any;
  constructor(private service:SharedService) { }
  EmployeeId:string=''
  EmployeeName:string='';
  Department:string='';
  DateOfJoining:string='';
  PhotoFileName:string='';
  PhotFilePath:string='';
  DepartmentList:any=[];
  ngOnInit(): void {
    this.loadDepartmentList();
  }
  loadDepartmentList(){
    this.service.getDepartmentList().subscribe((data:any)=>{
      this.DepartmentList=data;
      this.EmployeeId=this.emp.EmployeeId;
     this.EmployeeName=this.emp.EmployeeName;
      this.Department=this.emp.Department;
      this.DateOfJoining=this.emp.DateOfJoining;
      this.PhotoFileName=this.emp.PhotoFileName;
      this.PhotFilePath=this.service.photoPath+'/'+this.PhotoFileName
    })
      }
      addEmployee(){
        var val={
                  EmployeeId:this.EmployeeId,
                  EmployeeName:this.EmployeeName,
                  Department:this.Department,
                  DateOfJoining:this.DateOfJoining,
                  PhotoFileName:this.PhotoFileName
                }
        this.service.addEmployee(val).subscribe(res=>{
          alert(res.toString());
        })
          }
          updateEmployee()
          {
            var val={
              EmployeeId:this.EmployeeId,
              EmployeeName:this.EmployeeName,
                    Department:this.Department,
                    DateOfJoining:this.DateOfJoining,
                    PhotoFileName:this.PhotoFileName
            }
            this.service.updateEmployee(val).subscribe(res=>{
              alert(res.toString());
            })
          }
          uploadPhoto(event:any){
            var file=event.target.files[0];
            const formData:FormData=new FormData();
            formData.append('uploadedFile',file,file.Name);
            this.service.uploadPhot(formData).subscribe((data:any)=>{
              this.PhotoFileName=data.toString();
              this.PhotFilePath=this.service.photoPath+'/'+this.PhotoFileName;
            })
          }
}
