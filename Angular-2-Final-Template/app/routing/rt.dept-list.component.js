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
var DepartmentListComponent = (function () {
    function DepartmentListComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.departments = [
            { "id": 1, "name": "Angular" },
            { "id": 2, "name": "Node" },
            { "id": 3, "name": "MongoDB" },
            { "id": 4, "name": "Ruby" },
            { "id": 5, "name": "Bootstrap" }
        ];
    }
    DepartmentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var id = parseInt(params['id']);
            _this.selectedId = id;
        });
    };
    DepartmentListComponent.prototype.onSelect = function (department) {
        /* absolute path */
        //this.router.navigate(['/departments', department.id]);
        /* relative path */
        this.router.navigate([department.id], { relativeTo: this.activatedRoute });
    };
    DepartmentListComponent.prototype.isSelected = function (department) { return department.id === this.selectedId; };
    DepartmentListComponent = __decorate([
        core_1.Component({
            selector: 'dept-list',
            template: "<h1>Dept List Route Component</h1>  \n              <ul class=\"items\">\n                <li (click)=\"onSelect(dept)\" [class.selected]='isSelected(dept)' *ngFor = \"let dept of departments\">\n                  <span class=\"badge\"> {{dept.id}} </span> {{dept.name}}\n                </li>\n              </ul>\n              "
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute])
    ], DepartmentListComponent);
    return DepartmentListComponent;
}());
exports.DepartmentListComponent = DepartmentListComponent;
//# sourceMappingURL=rt.dept-list.component.js.map