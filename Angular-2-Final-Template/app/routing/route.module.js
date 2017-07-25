"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var rt_main_component_1 = require("./rt.main.component");
var rt_dept_list_component_1 = require("./rt.dept-list.component");
var rt_emp_list_component_1 = require("./rt.emp-list.component");
var RouteModule = (function () {
    function RouteModule() {
    }
    RouteModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: 'departments', component: rt_dept_list_component_1.DepartmentListComponent },
                    { path: 'employees', component: rt_emp_list_component_1.EmployeeListComponent }
                ])
            ],
            declarations: [rt_main_component_1.MainRouteComponent, rt_dept_list_component_1.DepartmentListComponent, rt_emp_list_component_1.EmployeeListComponent],
            bootstrap: [rt_main_component_1.MainRouteComponent]
        })
    ], RouteModule);
    return RouteModule;
}());
exports.RouteModule = RouteModule;
//# sourceMappingURL=route.module.js.map