import { Component } from '@angular/core';

@Component({
    selector: 'my-template',
    templateUrl: '/app/app.formsComponent.html'
})

export class FormsComponent { 
    //databinding property
    myName = "Nikhil";
    onSubmit(value:any){
        console.log(value);
    }
}