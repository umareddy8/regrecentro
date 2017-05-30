"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
///<reference path="./../../typings/globals/core-js/index.d.ts"/>
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var login_component_1 = require("./login-component");
var login_service_1 = require("./login-service");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
        declarations: [login_component_1.AppComponent],
        bootstrap: [login_component_1.AppComponent],
        providers: [login_service_1.LoginService]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1JlZnJlQ2VudHJvQXBwbGljYXRpb24vc3JjL0xvZ2luL2xvZ2luLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsaUVBQWlFO0FBQ2pFLHNDQUF5QztBQUN6Qyw4REFBMEQ7QUFDMUQsd0NBQTZDO0FBQzdDLHFEQUFpRDtBQUNqRCxpREFBK0M7QUFDL0Msc0NBQTJDO0FBUTNDLElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsU0FBUztJQU5yQixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLG1CQUFXLEVBQUUsaUJBQVUsQ0FBQztRQUNqRCxZQUFZLEVBQUUsQ0FBQyw4QkFBWSxDQUFDO1FBQzVCLFNBQVMsRUFBRSxDQUFDLDhCQUFZLENBQUM7UUFDekIsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUM1QixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJmaWxlIjoiTG9naW4vbG9naW4tbW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi8uLi8uLi90eXBpbmdzL2dsb2JhbHMvY29yZS1qcy9pbmRleC5kLnRzXCIvPlxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2xvZ2luLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4vbG9naW4tc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZSwgRm9ybXNNb2R1bGUsIEh0dHBNb2R1bGVdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50XSxcclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtMb2dpblNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9ICAgICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
