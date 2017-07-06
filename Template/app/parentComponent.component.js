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
var core_1 = require('@angular/core');
var tutorials_component_1 = require('./tutorials.component');
var ParentComponent = (function () {
    function ParentComponent() {
    }
    ParentComponent = __decorate([
        core_1.Component({
            selector: 'parent-component',
            template: "<h2>Parent Component</h2>\n               <lable>Enter Parent AppComponent Value</lable>\n             <input type=\"text\" #ptext (keyup) = \"0\"/>\n             <p>Value from child Tutorials Component is: </p>  \n              {{childData}}\n             <my-component (childEvent)=\"childData=$event\" [parentData]=\"ptext.value\"></my-component>\n\n    ",
            directives: [tutorials_component_1.TutorialsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ParentComponent);
    return ParentComponent;
}());
exports.ParentComponent = ParentComponent;
//# sourceMappingURL=parentComponent.component.js.map