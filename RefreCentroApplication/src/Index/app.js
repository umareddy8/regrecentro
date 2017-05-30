"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ASP.NET MVC 5 with Angular 2';
        this.skills = ['MVC 5', 'Angular 2', 'TypeScript', 'Visual Studio 2015'];
        this.myskills = this.skills[1];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "    \n    <h2>My favorite skill is: {{myskills}}</h2>\n    <p>Skill:</p>\n    <ul>\n      <li *ngFor=\"let skl of skills\">\n        {{ skl }}\n      </li>\n    </ul>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1JlZnJlQ2VudHJvQXBwbGljYXRpb24vc3JjL0luZGV4L2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQTBDO0FBYTFDLElBQWEsWUFBWTtJQVp6QjtRQWFJLFVBQUssR0FBRyw4QkFBOEIsQ0FBQztRQUN2QyxXQUFNLEdBQUcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3BFLGFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFBRCxtQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksWUFBWTtJQVp4QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLDRLQVFYO0tBQ0YsQ0FBQztHQUNXLFlBQVksQ0FJeEI7QUFKWSxvQ0FBWSIsImZpbGUiOiJJbmRleC9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYCAgICBcclxuICAgIDxoMj5NeSBmYXZvcml0ZSBza2lsbCBpczoge3tteXNraWxsc319PC9oMj5cclxuICAgIDxwPlNraWxsOjwvcD5cclxuICAgIDx1bD5cclxuICAgICAgPGxpICpuZ0Zvcj1cImxldCBza2wgb2Ygc2tpbGxzXCI+XHJcbiAgICAgICAge3sgc2tsIH19XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgICB0aXRsZSA9ICdBU1AuTkVUIE1WQyA1IHdpdGggQW5ndWxhciAyJztcclxuICAgIHNraWxscyA9IFsnTVZDIDUnLCAnQW5ndWxhciAyJywgJ1R5cGVTY3JpcHQnLCAnVmlzdWFsIFN0dWRpbyAyMDE1J107XHJcbiAgICBteXNraWxscyA9IHRoaXMuc2tpbGxzWzFdO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
