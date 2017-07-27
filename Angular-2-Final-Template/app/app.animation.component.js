"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var AnimationComponent = (function () {
    function AnimationComponent() {
        this.title = 'Angular Animations';
        this.roomState = "off";
    }
    AnimationComponent.prototype.toggleLights = function () {
        this.roomState = (this.roomState === "off") ? "on" : "off";
    };
    AnimationComponent.prototype.onAnimationStart = function (event) {
        console.log('animation start');
        console.log(event.fromState);
        console.log(event.toState);
        console.log(event.totalTime);
    };
    AnimationComponent.prototype.onAnimationDone = function (event) {
        console.log(event.fromState);
        console.log(event.toState);
        console.log(event.totalTime);
        console.log('animation done');
    };
    AnimationComponent = __decorate([
        core_1.Component({
            selector: 'my-animation',
            template: "<h1>{{title}}</h1>\n            <button (click) = \"toggleLights()\">ToggleLights</button>\n\n             <div \n             (@lightsOnOff.start)=\"onAnimationStart($event)\"\n             (@lightsOnOff.done)=\"onAnimationDone($event)\"\n             \n             [@lightsOnOff] = \"roomState\"\n             class=\"room\">\n             Rotate\n             </div>\n              ",
            animations: [
                core_2.trigger('lightsOnOff', [
                    core_2.state('off', core_2.style({ backgroundColor: 'black' })),
                    core_2.state('on', core_2.style({ backgroundColor: 'white' })),
                    core_2.transition('off => on', [core_2.animate('3s 2s ease-in', core_2.style({ transform: 'rotate(90deg)' }))]),
                    core_2.transition('on => off', [core_2.animate('2s ease-out', core_2.style({ transform: 'rotate(-90deg)' }))])
                    /* if transition have same type of style */
                    // transition('off => on, on => off', [animate('2s', 
                    //                                     style({transform:'rotate(90deg)'})
                    //                                 )]),
                    /*
                        ||
                        V
                    */
                    // transition('off <=> on', [animate('2s', 
                    //                                     style({transform:'rotate(90deg)'})
                    //                                 )]),
                ])
            ]
        })
    ], AnimationComponent);
    return AnimationComponent;
}());
exports.AnimationComponent = AnimationComponent;
//# sourceMappingURL=app.animation.component.js.map