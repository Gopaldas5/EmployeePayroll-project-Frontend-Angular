import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from '../employeeModel';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  
})

export class FormComponent implements OnInit {

  // depart!: departmentList[];
   depart:any=[]
  
    Id:any = this.route.snapshot.paramMap.get("Id");

   employee:EmployeeModel = new EmployeeModel("", "", "", 0, [],new Date, "");

  constructor(private employeeService:EmployeeService, private router:Router, private route : ActivatedRoute ) { }
  

  ngOnInit(): void {
    this.getDeprt();
    this.getEmployeeById();
    
  }
  
  addEmployee(){
    this.employeeService.insertEmployee(this.employee).subscribe((data:any)=>{
      this.router.navigate(["dashboard"])
    })
  }
 
  getDeprt(){
    this.depart =[
      {id:1,name:"HR",isSelected:false},
      {id:2,name:"Sales",isSelected:false},
      {id:3,name:"Engineer",isSelected:false},
      {id:4,name:"Finance",isSelected:false},
      {id:5,name:"Other",isSelected:false},
    ]
  }
  
  checkBoxChange($event:any, deptname:any){
     this.employee.departments.push(deptname);
  }

  updateEmployeeData(){
    this.employeeService.updateEmployeeById(this.employee, this.Id).subscribe((respose:any)=>{
      this.router.navigate(["dashboard"])
    });
  }

  getEmployeeById(){
    this.employeeService.getEmployeeById(this.Id).subscribe((respose:any)=>{
      this.employee = respose.data;
    });
  }
 

}
// class departmentList{
//   id: number | undefined;
//   name: string | undefined;
//   isSelected:boolean | undefined;
// }
