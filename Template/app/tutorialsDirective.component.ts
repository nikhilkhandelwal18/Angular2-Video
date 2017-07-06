import {Component} from '@angular/core';

@Component({
    selector: 'my-directives',
    
    template: `<h2>{{title}}</h2>
            <p *ngIf = "showElement">Show Element</p>
            <div [ngSwitch]="color">
                <p *ngSwitchWhen="'red'">Red color is shown</p>
                <p *ngSwitchWhen="'blue'">Blue color is shown</p>
                <p *ngSwitchDefault>Invalid Color</p>
                
            </div>
            <ul>
            <li *ngFor="let color of colors">{{color}}</li>
            </ul>
            <br/>
            <p [ngClass]="{classOne:cone,classTwo:ctwo}">ngClass Paragraph</p>  
            <button (click)="onToggle()">toggle</button>  
            <p [ngStyle]="{'font-style': style, 'font-size':size}">ngStyle Paragraph</p>
    `,

    styles: [`.classOne{color:red} 
              .classTwo{background-color: orange}`]
    
})

export class TutorialsDirective{
    /* 3 types of directives in Angular2:
    1. Component Directive
    2. Structural Directive : for DOM manupulation
                    built-in: ngIf, ngSwitch, ngFor
    3. Attribute Directive: changes behavior of DOM element
                    build-in: ngClass (dynamically apply multiple classes to html), ngStyle
     */
    public title = "Learn Directives";
    public showElement = true;
    public color = 'red';
    public colors = ['red', 'blue', 'green'];
    public cone = true;
    public ctwo = true;
    public style = 'italic';
    public size = '30px';
    onToggle(){
        this.cone = !this.cone,
        this.ctwo = !this.ctwo
    }
}