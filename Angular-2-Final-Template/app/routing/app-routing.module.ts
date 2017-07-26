import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentListComponent } from "./rt.dept-list.component";
import { EmployeeListComponent } from "./rt.emp-list.component";
import { DepartmentDetailComponent } from "./rt.dept-detail.component";


const routes: Routes = [
                    {path: 'departments', component: DepartmentListComponent},
                    {path: 'employees', component: EmployeeListComponent},
                    {path: 'departments/:id', component: DepartmentDetailComponent}                    
                  ]


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
export const routingComponents = [ DepartmentListComponent, EmployeeListComponent, DepartmentDetailComponent ]