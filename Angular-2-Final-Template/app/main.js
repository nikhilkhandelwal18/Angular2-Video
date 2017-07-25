"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
//Additional Module
var route_module_1 = require("./routing/route.module");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
platform.bootstrapModule(route_module_1.RouteModule);
//# sourceMappingURL=main.js.map