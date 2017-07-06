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
var TutorialsBindings = (function () {
    function TutorialsBindings() {
        this.title = "Learn... ";
        this.imgUrl = 'http://lorempixel.com/400/200';
    }
    TutorialsBindings.prototype.onClick = function (value) {
        console.log('button clicked');
        console.log(value);
    };
    TutorialsBindings = __decorate([
        core_1.Component({
            selector: 'my-tutorials',
            template: "<h2>Nikhil Learning</h2>\n                <h4>Header 4 from Tutorials Component.</h4>\n                <h2>{{title}}</h2>                \n                <img [src] = \"imgUrl\" /> <br/>\n                <input type = \"text\" value=\"Angular\" /> <br/> \n                Event Binding: \n                <input type = \"text\" #demoInput />\n                <button (click)=\"onClick(demoInput.value)\">Click Me </button>\n                <br/>\n                Two Way Bindings: \n                <input type=\"text\" [(ngModel)]=\"fname\"/>\n                <input type=\"text\" [(ngModel)]=\"lname\"/>\n                FullName: {{fname}} {{lname}}\n                ",
            styles: ["h4 { \n        color: red;\n    }"]
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsBindings);
    return TutorialsBindings;
}());
exports.TutorialsBindings = TutorialsBindings;
//# sourceMappingURL=tutorialsBinding.component.js.map