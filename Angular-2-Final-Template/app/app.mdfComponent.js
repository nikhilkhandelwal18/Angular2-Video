"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var MDFComponent = (function () {
    function MDFComponent() {
        this.userForm = new forms_1.FormGroup({
            name: new forms_1.FormControl('Brandon', forms_1.Validators.required),
            email: new forms_1.FormControl(),
            address: new forms_1.FormGroup({
                street: new forms_1.FormControl(),
                city: new forms_1.FormControl(),
                postalcode: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(4)])
            })
        });
    }
    MDFComponent.prototype.onSubmit = function () {
        console.log(this.userForm.value);
    };
    MDFComponent = __decorate([
        core_1.Component({
            selector: 'my-mdftemplate',
            templateUrl: '/app/app.mdfComponent.html',
            styles: ["input.ng-invalid{border-left:5px solid red}\n              input.ng-valid{border-left:5px solid green}  "]
        })
        //Modal Driven Form
    ], MDFComponent);
    return MDFComponent;
}());
exports.MDFComponent = MDFComponent;
//# sourceMappingURL=app.mdfComponent.js.map