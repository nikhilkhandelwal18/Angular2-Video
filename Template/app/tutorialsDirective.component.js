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
var TutorialsDirective = (function () {
    function TutorialsDirective() {
        /* 3 types of directives in Angular2:
        1. Component Directive
        2. Structural Directive : for DOM manupulation
                        built-in: ngIf, ngSwitch, ngFor
        3. Attribute Directive: changes behavior of DOM element
                        build-in: ngClass (dynamically apply multiple classes to html), ngStyle
         */
        this.title = "Learn Directives";
        this.showElement = true;
        this.color = 'red';
        this.colors = ['red', 'blue', 'green'];
        this.cone = true;
        this.ctwo = true;
        this.style = 'italic';
        this.size = '30px';
    }
    TutorialsDirective.prototype.onToggle = function () {
        this.cone = !this.cone,
            this.ctwo = !this.ctwo;
    };
    TutorialsDirective = __decorate([
        core_1.Component({
            selector: 'my-directives',
            template: "<h2>{{title}}</h2>\n            <p *ngIf = \"showElement\">Show Element</p>\n            <div [ngSwitch]=\"color\">\n                <p *ngSwitchWhen=\"'red'\">Red color is shown</p>\n                <p *ngSwitchWhen=\"'blue'\">Blue color is shown</p>\n                <p *ngSwitchDefault>Invalid Color</p>\n                \n            </div>\n            <ul>\n            <li *ngFor=\"let color of colors\">{{color}}</li>\n            </ul>\n            <br/>\n            <p [ngClass]=\"{classOne:cone,classTwo:ctwo}\">ngClass Paragraph</p>  \n            <button (click)=\"onToggle()\">toggle</button>  \n            <p [ngStyle]=\"{'font-style': style, 'font-size':size}\">ngStyle Paragraph</p>\n    ",
            styles: [".classOne{color:red} \n              .classTwo{background-color: orange}"]
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsDirective);
    return TutorialsDirective;
}());
exports.TutorialsDirective = TutorialsDirective;
//# sourceMappingURL=tutorialsDirective.component.js.map