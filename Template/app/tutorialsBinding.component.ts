import {Component} from '@angular/core';

@Component({
    selector: 'my-tutorials',
    template: `<h2>Nikhil Learning</h2>
                <h4>Header 4 from Tutorials Component.</h4>
                <h2>{{title}}</h2>                
                <img [src] = "imgUrl" /> <br/>
                <input type = "text" value="Angular" /> <br/> 
                Event Binding: 
                <input type = "text" #demoInput />
                <button (click)="onClick(demoInput.value)">Click Me </button>
                <br/>
                Two Way Bindings: 
                <input type="text" [(ngModel)]="fname"/>
                <input type="text" [(ngModel)]="lname"/>
                FullName: {{fname}} {{lname}}
                `,
    styles: [`h4 { 
        color: red;
    }`]
})

export class TutorialsBindings { 
    public title = "Learn... ";
    public imgUrl = 'http://lorempixel.com/400/200';
    onClick(value){
        console.log('button clicked');
        console.log(value);    
    }
    public fname;
    public lname;
}
