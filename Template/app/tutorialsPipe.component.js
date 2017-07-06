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
var TutorialsPipe = (function () {
    function TutorialsPipe() {
        this.name = 'TheExpert';
        this.date = new Date();
    }
    TutorialsPipe = __decorate([
        core_1.Component({
            selector: 'my-pipe',
            template: "<h2>Pipe Example</h2>\n    <h2>{{date}}</h2>\n    <h2>{{date | date: 'fullDate' }}</h2>\n    <h2>{{date | date: 'shortDate' }}</h2>\n    <h2>{{date | date: 'mediumTime' }}</h2>\n    \n    <h2>{{name}}</h2>\n    <h2>{{name | uppercase}}</h2>\n    <h2>{{name | lowercase}}</h2>\n    <h2>{{name | slice: '2':'4'}}</h2> <!--upto 4 but not 4-->\n    <h2>{{name | replace: 'The':'Hello'}}</h2>  <!--case sensitive-->\n   \n    <h2>{{8.567}}</h2>\n    <h2>{{8.567 | number:'1.2-3'}}</h2>\n    <h2>{{8.567 | number:'2.2-3'}}</h2>\n    <h2>{{8.567 | number:'2.4-4'}}</h2>\n    <h2>{{8.567 | number:'2.2-2'}}</h2>\n    \n    <h2>{{8.99 | currency}}</h2>\n    <h2>{{8.99 | currency:'EUR'}}</h2>\n    <h2>{{8.99 | currency:'EUR':true}}</h2>\n    <h2>{{8.789 | currency:'GBP':true | number:'2.2'}}</h2>\n    \n   \n    \n    \n    \n    \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TutorialsPipe);
    return TutorialsPipe;
}());
exports.TutorialsPipe = TutorialsPipe;
//# sourceMappingURL=tutorialsPipe.component.js.map