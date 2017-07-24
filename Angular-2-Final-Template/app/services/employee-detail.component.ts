import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';


@Component({
selector:'emp-detail',
template: `<h2>Employee Details</h2>
            <ul *ngFor = "let emp of employees" >
                <li> {{emp.id}} - {{emp.name}} - {{emp.gender}} </li>
            </ul>
`
})

export class EmployeeDetailComponent implements OnInit { 
    employees = [];
    constructor(private _employeeService : EmployeeService){}
    ngOnInit(){
        //this.employees = this._employeeService.getEmployees();

          /* with Http */
        this._employeeService.getEmployees()
            .subscribe(responseEmpData => this.employees = responseEmpData);
    }
}