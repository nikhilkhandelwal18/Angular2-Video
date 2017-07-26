"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MainRouteComponent = (function () {
    function MainRouteComponent() {
    }
    MainRouteComponent = __decorate([
        core_1.Component({
            selector: 'my-route',
            template: "<h1>Routing Application</h1> \n              <nav>\n                <a routerLink=\"/\" routerLinkActive = \"active\">Home</a>\n              \n                <a routerLink=\"/departments\" routerLinkActive = \"active\">Departments</a>\n                <a  routerLink=\"/employees\" routerLinkActive = \"active\">Employees</a>\n                \n              </nav> \n\n              <router-outlet> <!-- show navigated component -->\n              </router-outlet>\n              "
        })
    ], MainRouteComponent);
    return MainRouteComponent;
}());
exports.MainRouteComponent = MainRouteComponent;
//# sourceMappingURL=rt.main.component.js.map