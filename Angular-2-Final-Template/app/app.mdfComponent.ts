import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'my-mdftemplate',
    templateUrl: '/app/app.mdfComponent.html',
    styles: [`input.ng-invalid{border-left:5px solid red}
              input.ng-valid{border-left:5px solid green}  `]
})

//Modal Driven Form
export class MDFComponent { 
    userForm = new FormGroup({
    name: new FormControl('Brandon', Validators.required ),
    email: new FormControl(),
    address: new FormGroup({
                street: new FormControl(),
                city: new FormControl(),
                postalcode: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(4)])
            })
    });
    
  onSubmit(){
      console.log(this.userForm.value);
  }
}