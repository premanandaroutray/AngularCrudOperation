import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-home-layout-component',
  templateUrl: './home-layout-component.component.html',
  styleUrls: ['./home-layout-component.component.css']
})
export class HomeLayoutComponentComponent implements OnInit {

  constructor(private router:Router,private service:SharedService) { }

  ngOnInit(): void {
  }
logout(){
  this.service.isLoggeIn=false;
  window.location.href='http://localhost:4200'

}
}
