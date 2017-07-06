import { Component } from '@angular/core';
@Component({
    selector: 'my-pipe',
    template: `<h2>Pipe Example</h2>
    <h2>{{date}}</h2>
    <h2>{{date | date: 'fullDate' }}</h2>
    <h2>{{date | date: 'shortDate' }}</h2>
    <h2>{{date | date: 'mediumTime' }}</h2>
    
    <h2>{{name}}</h2>
    <h2>{{name | uppercase}}</h2>
    <h2>{{name | lowercase}}</h2>
    <h2>{{name | slice: '2':'4'}}</h2> <!--upto 4 but not 4-->
    <h2>{{name | replace: 'The':'Hello'}}</h2>  <!--case sensitive-->
   
    <h2>{{8.567}}</h2>
    <h2>{{8.567 | number:'1.2-3'}}</h2>
    <h2>{{8.567 | number:'2.2-3'}}</h2>
    <h2>{{8.567 | number:'2.4-4'}}</h2>
    <h2>{{8.567 | number:'2.2-2'}}</h2>
    
    <h2>{{8.99 | currency}}</h2>
    <h2>{{8.99 | currency:'EUR'}}</h2>
    <h2>{{8.99 | currency:'EUR':true}}</h2>
    <h2>{{8.789 | currency:'GBP':true | number:'2.2'}}</h2>
    
   
    
    
    
    
    `
})

export class TutorialsPipe{
    public name:string = 'TheExpert';
    public date = new Date();
}