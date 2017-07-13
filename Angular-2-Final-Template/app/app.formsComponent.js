"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FormsComponent = (function () {
    function FormsComponent() {
        //databinding property
        this.myName = "Nikhil";
    }
    FormsComponent.prototype.onSubmit = function (value) {
        console.log(value);
    };
    FormsComponent = __decorate([
        core_1.Component({
            selector: 'my-template',
            templateUrl: '/app/app.formsComponent.html',
            styles: ["input.ng-invalid{border-left:5px solid red}\n              input.ng-valid{border-left:5px solid green}  "]
        })
    ], FormsComponent);
    return FormsComponent;
}());
exports.FormsComponent = FormsComponent;
//# sourceMappingURL=app.formsComponent.js.map