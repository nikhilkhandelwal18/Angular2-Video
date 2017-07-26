"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rt_dept_list_component_1 = require("./rt.dept-list.component");
var rt_emp_list_component_1 = require("./rt.emp-list.component");
var rt_dept_detail_component_1 = require("./rt.dept-detail.component");
var routes = [
    { path: 'departments', component: rt_dept_list_component_1.DepartmentListComponent },
    { path: 'employees', component: rt_emp_list_component_1.EmployeeListComponent },
    { path: 'departments/:id', component: rt_dept_detail_component_1.DepartmentDetailComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [rt_dept_list_component_1.DepartmentListComponent, rt_emp_list_component_1.EmployeeListComponent, rt_dept_detail_component_1.DepartmentDetailComponent];
//# sourceMappingURL=app-routing.module.js.map