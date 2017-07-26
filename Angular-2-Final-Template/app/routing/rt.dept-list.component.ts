import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'dept-list',
   template: `<h1>Dept List Route Component</h1>  
              <ul class="items">
                <li (click)="onSelect(dept)" [class.selected]='isSelected(dept)' *ngFor = "let dept of departments">
                  <span class="badge"> {{dept.id}} </span> {{dept.name}}
                </li>
              </ul>
              `
})
export class DepartmentListComponent implements OnInit {
  public selectedId;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute){}


  departments = [
                  {"id": 1, "name": "Angular"},
                  {"id": 2, "name": "Node"},
                  {"id": 3, "name": "MongoDB"},
                  {"id": 4, "name": "Ruby"},
                  {"id": 5, "name": "Bootstrap"}
                ]


   ngOnInit(){
    this.activatedRoute.params.subscribe((params: Params) => {
        let id = parseInt(params['id']);
        this.selectedId = id;
    })
  }
  
  onSelect(department){
    this.router.navigate(['/departments', department.id]);
  }

   isSelected(department){return department.id === this.selectedId; }

}