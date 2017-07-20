import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'my-mdftemplate',
    templateUrl: '/app/app.mdfComponent.html',
    styles: [`input.ng-invalid{border-left:5px solid red}
              input.ng-valid{border-left:5px solid green}  `]
})

//Modal Driven Form + FormBuilder
export class MDFComponent implements OnInit {
    userForm: FormGroup;

    //ES2015 to initialize formBUilder
    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit(){
        this.userForm = this._formBuilder.group({
            name: ['Brandon', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
            email: [],
            address: this._formBuilder.group({
                street: [],
                city: [],
                postalcode: [null, [Validators.pattern('^[1-9][0-9]{4}$')] ]
            })
        })
    }

    /*
    userForm = new FormGroup({
    name: new FormControl('Brandon',  [Validators.required, Validators.minLength(2), Validators.maxLength(4)] ),
    email: new FormControl(),
    address: new FormGroup({
                street: new FormControl(),
                city: new FormControl(),
                postalcode: new FormControl(null, [Validators.pattern('^[1-9][0-9]{4}$')])
            })
    });
     */

  onSubmit(){
      console.log(this.userForm.value);
  }

  
       
}