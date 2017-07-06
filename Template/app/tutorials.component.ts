import {Component} from '@angular/core';
import {EventEmitter} from '@angular/core';


@Component({
    selector: 'my-component',
    template: ` <h2>{{title}}</h2>                
             <lable>Enter Child TutorialsComponent Value</lable>
             <input type="text" #childtext (keyup)="onChange(childtext.value)"/>
             <p>Value from parent AppComponent is: </p> 
             {{parentData}} 
                `,
    inputs: [`parentData`],
    outputs: ['childEvent']
})

export class TutorialsComponent { 
    public title = "Child Tutorial Component";
    public parentData: string;
    public childEvent = new EventEmitter<string>();
    onChange(value){
        this.childEvent.emit(value);
    }
   
}
