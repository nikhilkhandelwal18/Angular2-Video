import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
   template: `<h1>Dept Detail Route Component</h1>  
              Department Id: {{departmentId}} 
              `
})
export class DepartmentDetailComponent 
        implements OnInit {

        public departmentId;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    let id = this.activatedRoute.snapshot.params['id'];
    this.departmentId = id;
  }
}