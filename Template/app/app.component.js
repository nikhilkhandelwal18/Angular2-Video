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
var tutorialsBinding_component_1 = require('./tutorialsBinding.component');
var tutorials_component_1 = require('./tutorials.component');
var tutorialsDirective_component_1 = require('./tutorialsDirective.component');
var parentComponent_component_1 = require('./parentComponent.component');
var tutorialsPipe_component_1 = require('./tutorialsPipe.component');
//[property] : Property Binding
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Hello World</h1>\n             <h2>App Component</h2>\n             <my-pipe></my-pipe>\n             ",
            styles: ["h4 {color: blue;}"],
            directives: [tutorialsBinding_component_1.TutorialsBindings,
                tutorials_component_1.TutorialsComponent,
                tutorialsDirective_component_1.TutorialsDirective,
                parentComponent_component_1.ParentComponent,
                tutorialsPipe_component_1.TutorialsPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map