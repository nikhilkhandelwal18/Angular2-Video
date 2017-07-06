import { Component } from '@angular/core';

import {TutorialsBindings} from './tutorialsBinding.component';
import {TutorialsComponent} from './tutorials.component';
import {TutorialsDirective} from './tutorialsDirective.component';
import {ParentComponent} from './parentComponent.component';
import {TutorialsPipe} from './tutorialsPipe.component';


//[property] : Property Binding
@Component({
  selector: 'my-app',
  template: `<h1>Hello World</h1>
             <h2>App Component</h2>
             <my-pipe></my-pipe>
             `,
  styles: [`h4 {color: blue;}`],
  directives: [TutorialsBindings, 
               TutorialsComponent, 
               TutorialsDirective, 
               ParentComponent,
               TutorialsPipe ]
})
export class AppComponent {

 }
