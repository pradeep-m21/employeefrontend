import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  employeesToDisplay!: Employee[];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }
  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);

  }
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);

  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();

    })

  }

  // searchEmployees(event: any) {
  //   let filteredEmployees: Employee[] = [];

  //   if (event = '') {
  //     this.employeesToDisplay = this.employees;
  //   } else {
  //     filteredEmployees = this.employees.filter((val, index) = {
  //       let targetKey = Val.firstname.toLowerCase() + '' + Val.lastname.toLowerCase();
  //       let searchKey = event.toLowerCase();
  //       return targetKey.includes(searchKey);
  //     });
  //     this.employeesToDisplay = filteredEmployees;
  //   }
  // }

}
