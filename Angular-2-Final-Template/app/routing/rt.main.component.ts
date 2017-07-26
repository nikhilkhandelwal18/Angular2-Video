import { Component } from '@angular/core';

@Component({
  selector: 'my-route',
   template: `<h1>Routing Application</h1> 
              <nav>
                <a routerLink="/" routerLinkActive = "active">Home</a>
              
                <a routerLink="/departments" routerLinkActive = "active">Departments</a>
                <a  routerLink="/employees" routerLinkActive = "active">Employees</a>
                
              </nav> 

              <router-outlet> <!-- show navigated component -->
              </router-outlet>
              `
})
export class MainRouteComponent {

}