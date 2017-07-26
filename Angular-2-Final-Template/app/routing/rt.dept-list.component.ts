import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'dept-list',
   template: `<h1>Dept List Route Component</h1>  
              <ul class="items">
                <li (click)="onSelect(dept)" *ngFor = "let dept of departments">
                  <span class="badge"> {{dept.id}} </span> {{dept.name}}
                </li>
              </ul>
              `
})
export class DepartmentListComponent {

  constructor(private router: Router){}


  departments = [
                  {"id": 1, "name": "Angular"},
                  {"id": 2, "name": "Node"},
                  {"id": 3, "name": "MongoDB"},
                  {"id": 4, "name": "Ruby"},
                  {"id": 5, "name": "Bootstrap"}
                ]
  
  onSelect(department){
    this.router.navigate(['/departments', department.id]);
  }

}