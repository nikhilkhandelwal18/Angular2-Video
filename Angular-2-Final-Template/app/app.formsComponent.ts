import { Component } from '@angular/core';

@Component({
    selector: 'my-template',
    templateUrl: '/app/app.formsComponent.html',
    styles: [`input.ng-invalid{border-left:5px solid red}
              input.ng-valid{border-left:5px solid green}  `]
})

export class FormsComponent { 
    //databinding property
    myName = "Nikhil";
    onSubmit(value:any){
        console.log(value);
    }
}