import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  allEmploy:any=[];
  
  employeeCount:number = 0;
  allEmployee: any;
  

  constructor( private router:Router, private service:EmployeeService) { }
 

  ngOnInit(): void {
    this.getAllEmployee();
    
  }
  btnClick= () =>{
    this.router.navigateByUrl('/form')
  }

  getAllEmployee(){
      this.service.getAllEmployees().subscribe((response:any) =>{
        console.log("data= ",response.data);
        this.allEmploy=response;
        this.employeeCount=this.allEmploy.length;
      });
  }

  deleteById(Id:number){
    this.service.deleteEmployeeById(Id).subscribe((data:any)=>{
      console.log("Data delete successfully");
      this.ngOnInit();
      this.router.navigate(["dashbord"]);
    });
  }

  editById(Id:number){
    this.router.navigate(['update',Id]);
  }

}
