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
var router_1 = require("@angular/router");
var DepartmentDetailComponent = (function () {
    function DepartmentDetailComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    DepartmentDetailComponent.prototype.ngOnInit = function () {
        var id = this.activatedRoute.snapshot.params['id'];
        this.departmentId = id;
    };
    DepartmentDetailComponent = __decorate([
        core_1.Component({
            template: "<h1>Dept Detail Route Component</h1>  \n              Department Id: {{departmentId}} \n              "
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], DepartmentDetailComponent);
    return DepartmentDetailComponent;
}());
exports.DepartmentDetailComponent = DepartmentDetailComponent;
//# sourceMappingURL=rt.dept-detail.component.js.map