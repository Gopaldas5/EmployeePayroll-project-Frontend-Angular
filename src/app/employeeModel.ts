
export class EmployeeModel{
    name:string = "";
    profilePic:string = "";
    gender:string = "";
    salary:number = 0;
    departments:Array<string> = [];
    startDate:Date;
    notes:string = "";

   constructor(name:string, profilePic:string, gender:string, salary:number, departments:Array<string>, startDate:Date, notes:string ){
      this.name = name;
      this.profilePic = profilePic;
      this.gender = gender;
      this.salary = salary;
      this.departments = departments;
      this.startDate = startDate;
      this.notes = notes;
   } 

}