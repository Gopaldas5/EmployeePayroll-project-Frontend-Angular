
import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { EmployeeModel } from './employeeModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(private http:HttpClient) { }

  insertEmployee(employee:any){
    return this.http.post("http://localhost:8080/employee/add",employee);
  }

  getAllEmployees(){
    return this.http.get("http://localhost:8080/employee/getAllEmployees");
  }

  getEmployeeById(Id: any){
    return this.http.get("http://localhost:8080/employee/getEmployee/"+Id);
  }

  updateEmployeeById(employee:any, Id:number){
    return this.http.put("http://localhost:8080/employee/update/"+Id, employee)
  }


  deleteEmployeeById(Id: number){
   return this.http.delete("http://localhost:8080/employee/delete/"+Id);
 
    }
}
