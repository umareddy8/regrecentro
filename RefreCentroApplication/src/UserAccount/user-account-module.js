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
var user_account_component_1 = require("./user-account-component");
var user_account_service_1 = require("./user-account-service");
var http_1 = require("@angular/http");
var UserAccountModule = (function () {
    function UserAccountModule() {
    }
    return UserAccountModule;
}());
UserAccountModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
        declarations: [user_account_component_1.UserAccountComponent],
        bootstrap: [user_account_component_1.UserAccountComponent],
        providers: [user_account_service_1.UserAccountService]
    })
], UserAccountModule);
exports.UserAccountModule = UserAccountModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1JlZnJlQ2VudHJvQXBwbGljYXRpb24vc3JjL1VzZXJBY2NvdW50L3VzZXItYWNjb3VudC1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGlFQUFpRTtBQUNqRSxzQ0FBeUM7QUFDekMsOERBQTBEO0FBQzFELHdDQUE2QztBQUM3QyxtRUFBZ0U7QUFDaEUsK0RBQTREO0FBQzVELHNDQUEyQztBQVEzQyxJQUFhLGlCQUFpQjtJQUE5QjtJQUFpQyxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQUFqQyxBQUFrQyxJQUFBO0FBQXJCLGlCQUFpQjtJQU43QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLG1CQUFXLEVBQUUsaUJBQVUsQ0FBQztRQUNqRCxZQUFZLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBQztRQUNwQyxTQUFTLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBQztRQUNqQyxTQUFTLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztLQUNsQyxDQUFDO0dBQ1csaUJBQWlCLENBQUk7QUFBckIsOENBQWlCIiwiZmlsZSI6IlVzZXJBY2NvdW50L3VzZXItYWNjb3VudC1tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLy4uLy4uL3R5cGluZ3MvZ2xvYmFscy9jb3JlLWpzL2luZGV4LmQudHNcIi8+XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFVzZXJBY2NvdW50Q29tcG9uZW50IH0gZnJvbSAnLi91c2VyLWFjY291bnQtY29tcG9uZW50JztcclxuaW1wb3J0IHsgVXNlckFjY291bnRTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLWFjY291bnQtc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZSwgRm9ybXNNb2R1bGUsIEh0dHBNb2R1bGVdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbVXNlckFjY291bnRDb21wb25lbnRdLFxyXG4gICAgYm9vdHN0cmFwOiBbVXNlckFjY291bnRDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbVXNlckFjY291bnRTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckFjY291bnRNb2R1bGUgeyB9ICAgICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
