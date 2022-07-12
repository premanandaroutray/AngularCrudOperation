import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private service:SharedService) { }
  errorMessage: string = ''
 resMessage:any;
  model = {
    email: '',
    password: ''
  };
  ngOnInit(): void {
  }
 

  customerLogin(UserId:string,password:string){
    debugger;
    console.log("pwd="+password+' '+UserId)
    if(UserId && password)
    {
      if(UserId==='abc@gmail.com' && password==='1234')
      {
        this.service.isLoggeIn=true;
        this.model.email='';
        this.model.email='';
            this.router.navigate(['ems/home']);

           
    }
    else
    {
this.errorMessage='UserId or password is incorrect'
    }
    console.log(password+' '+UserId)

  }
  else{
  this.errorMessage='All the fields are mandatory.'

}
  }
}
