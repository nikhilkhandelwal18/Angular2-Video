import { Component } from '@angular/core';
import {TutorialsComponent} from './tutorials.component';


@Component({
    selector: 'parent-component',
    template: `<h2>Parent Component</h2>
               <lable>Enter Parent AppComponent Value</lable>
             <input type="text" #ptext (keyup) = "0"/>
             <p>Value from child Tutorials Component is: </p>  
              {{childData}}
             <my-component (childEvent)="childData=$event" [parentData]="ptext.value"></my-component>

    `,
    directives: [TutorialsComponent]
})
export class ParentComponent{
  public childData: string;
}