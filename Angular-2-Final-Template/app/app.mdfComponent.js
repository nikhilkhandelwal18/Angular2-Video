"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var MDFComponent = (function () {
    //ES2015 to initialize formBUilder
    function MDFComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    MDFComponent.prototype.ngOnInit = function () {
        this.userForm = this._formBuilder.group({
            name: ['Brandon', [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(4)]],
            email: [],
            address: this._formBuilder.group({
                street: [],
                city: [],
                postalcode: [null, [forms_1.Validators.pattern('^[1-9][0-9]{4}$')]]
            })
        });
    };
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
    MDFComponent.prototype.onSubmit = function () {
        console.log(this.userForm.value);
    };
    MDFComponent = __decorate([
        core_1.Component({
            selector: 'my-mdftemplate',
            templateUrl: '/app/app.mdfComponent.html',
            styles: ["input.ng-invalid{border-left:5px solid red}\n              input.ng-valid{border-left:5px solid green}  "]
        })
        //Modal Driven Form + FormBuilder
        ,
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], MDFComponent);
    return MDFComponent;
}());
exports.MDFComponent = MDFComponent;
//# sourceMappingURL=app.mdfComponent.js.map