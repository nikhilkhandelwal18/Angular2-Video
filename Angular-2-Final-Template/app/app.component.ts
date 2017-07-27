import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'my-app',
  // template: `<h1>Hello World</h1>  
  //             <sub-app></sub-app>`
  // template: `<h1>App Component my-app</h1>  
  //             <emp-list></emp-list>
  //             <emp-detail></emp-detail>`
  
   template: `<h1>Hello World</h1>  
              <my-animation></my-animation>`
              ,
  providers: [EmployeeService]
})
export class AppComponent { }
