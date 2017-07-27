import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

import { DepartmentListComponent } from "./rt.dept-list.component";
import { EmployeeListComponent } from "./rt.emp-list.component";
import { DepartmentDetailComponent } from "./rt.dept-detail.component";
import { PageNotFoundComponent } from './page-not-found.component';


const routes: Routes = [
                    //{path: '', component: HomeComponent},                    
                    {path: '', redirectTo:'\departments', pathMatch: 'full' },
                    {path: 'xxx', component: DepartmentListComponent},
                    {path: 'employees', component: EmployeeListComponent},
                    {path: 'xxx/:id', component: DepartmentDetailComponent},
                    {path: '**', component: PageNotFoundComponent} //wildcart path
                  ]


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponent,  DepartmentListComponent, EmployeeListComponent, DepartmentDetailComponent, 
                                    PageNotFoundComponent ]