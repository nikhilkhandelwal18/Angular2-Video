import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
   template: `<h1>Dept Detail Route Component</h1>  
              Department Id: {{departmentId}} 
              <a (click)="goPrvious()"> Previous </a>
              <a (click)="goNext()"> Next </a>  
              `
})
export class DepartmentDetailComponent 
        implements OnInit {

    public departmentId;
  constructor(
                private activatedRoute: ActivatedRoute,
                private router: Router
            ) { }

  /* ngOnInit(){
    let id = this.activatedRoute.snapshot.params['id']; //when neviagting from component to itself it does not reload itself. {limitation}
    this.departmentId = id;
  } */

  ngOnInit(){
    this.activatedRoute.params.subscribe((params: Params) => {
        let id = parseInt(params['id']);
        this.departmentId = id;
    })
  }

  goPrvious(){
      let previousId = this.departmentId - 1;
      this.router.navigate(['/departments', previousId]);
  }

  goNext(){
      let nextId = this.departmentId + 1;
      this.router.navigate(['/departments', nextId]);
  }
}