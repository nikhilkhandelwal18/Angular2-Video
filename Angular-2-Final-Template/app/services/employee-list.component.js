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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var EmployeeListComponent = (function () {
    function EmployeeListComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.employees = [];
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        /* without Http */
        //this.employees = this._employeeService.getEmployees();
        var _this = this;
        /* with Http */
        this._employeeService.getEmployees()
            .subscribe(function (responseEmpData) { return _this.employees = responseEmpData; }, function (responseEmpError) { return _this.errorMsg = responseEmpError; });
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'emp-list',
            template: "<h2>Employee List</h2>\n            <h3>{{errorMsg}}</h3>\n         <ul *ngFor = \"let emp of employees;\">\n            <li>\n                {{ emp.name }}\n            </li>\n         </ul> \n         "
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee-list.component.js.map