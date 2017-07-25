import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { MainRouteComponent } from './rt.main.component'
import { DepartmentListComponent } from "./rt.dept-list.component";
import { EmployeeListComponent } from "./rt.emp-list.component";

@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot([
                    {path: 'departments', component: DepartmentListComponent},
                    {path: 'employees', component: EmployeeListComponent}
                    
                  ])  
  ],
  declarations: [ MainRouteComponent, DepartmentListComponent, EmployeeListComponent ],
  bootstrap:    [ MainRouteComponent ]
})
export class RouteModule { }
