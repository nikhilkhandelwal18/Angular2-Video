import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
selector:'emp-list',
template: `<h2>Employee List</h2>
         <ul *ngFor = "let emp of employees;">
            <li>
                {{ emp.name }}
            </li>
         </ul> 
         `
})

export class EmployeeListComponent implements OnInit {
    employees = [];
    constructor(private _employeeService : EmployeeService){}
    ngOnInit(){
        /* without Http */
        //this.employees = this._employeeService.getEmployees();

        /* with Http */
        this._employeeService.getEmployees()
            .subscribe(responseEmpData => this.employees = responseEmpData);
    }

    /* get from service */
    // employees= [
    //     {"id": 1, "name": "Andrew", "gender": "Male"},
    //     {"id": 2, "name": "Brandon", "gender": "Male"},
    //     {"id": 3, "name": "Christina", "gender": "Female"},
    //     {"id": 4, "name": "Elena", "gender": "Female"},
    //     {"id": 5, "name": "Jacob", "gender": "Male"}                                
    // ];


}