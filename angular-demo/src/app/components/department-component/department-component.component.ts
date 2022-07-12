import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-department-component',
  templateUrl: './department-component.component.html',
  styleUrls: ['./department-component.component.css']
})
export class DepartmentComponentComponent implements OnInit {

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    console.log(this.service.isLoggeIn);
  }

}
