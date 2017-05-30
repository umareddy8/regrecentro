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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.controller = "ApiLeave";
        this.commonController = "APICommon";
    }
    LoginService.prototype.validateLogin = function (userLogingRequest) {
        var body = JSON.stringify(userLogingRequest);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post("/Login/Login", body, options);
    };
    LoginService.prototype.changePassword = function (passwordChangeRequest) {
        var body = JSON.stringify(passwordChangeRequest);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post("/Login/ChangePassword", body, options);
    };
    LoginService.prototype.getPaymentData = function (userLogingRequest) {
        return this.http.get("/UserAccount/PersonalInfo"
            + "?CustomerNumber=" + userLogingRequest.CustomerNumber + "&password=" + userLogingRequest.Password);
        //  .map(result => result.json().map(obj => new UserLoginDetails(obj)));
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LoginService);
exports.LoginService = LoginService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1JlZnJlQ2VudHJvQXBwbGljYXRpb24vc3JjL0xvZ2luL2xvZ2luLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBOEQ7QUFNOUQsSUFBYSxZQUFZO0lBR3JCLHNCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxvQ0FBYSxHQUFiLFVBQWMsaUJBQW9DO1FBQzlDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUU3QyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFFdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDekQsQ0FBQztJQUVELHFDQUFjLEdBQWQsVUFBZSxxQkFBdUM7UUFDbEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRWpELElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUNsRSxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUV2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ2pFLENBQUM7SUFFRCxxQ0FBYyxHQUFkLFVBQWUsaUJBQW1DO1FBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywyQkFBMkI7Y0FDMUMsa0JBQWtCLEdBQUcsaUJBQWlCLENBQUMsY0FBYyxHQUFHLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN0Ryx3RUFBd0U7SUFDOUUsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQS9CWSxZQUFZO0lBRHhCLGlCQUFVLEVBQUU7cUNBSWlCLFdBQUk7R0FIckIsWUFBWSxDQStCeEI7QUEvQlksb0NBQVkiLCJmaWxlIjoiTG9naW4vbG9naW4tc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBVc2VyTG9naW5EZXRhaWxzIH0gZnJvbSAnLi4vTW9kZWxzL1VkZXJMb2dpbkRldGFpbHMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xuICAgIGNvbnRyb2xsZXI6IHN0cmluZztcbiAgICBjb21tb25Db250cm9sbGVyOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IFwiQXBpTGVhdmVcIjtcclxuICAgICAgICB0aGlzLmNvbW1vbkNvbnRyb2xsZXIgPSBcIkFQSUNvbW1vblwiO1xuICAgIH1cblxuICAgIHZhbGlkYXRlTG9naW4odXNlckxvZ2luZ1JlcXVlc3QgOiBVc2VyTG9naW5EZXRhaWxzKSB7XG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlckxvZ2luZ1JlcXVlc3QpO1xyXG5cbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG5cclxuICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFwiL0xvZ2luL0xvZ2luXCIsIGJvZHksIG9wdGlvbnMpXG4gICAgfVxuXG4gICAgY2hhbmdlUGFzc3dvcmQocGFzc3dvcmRDaGFuZ2VSZXF1ZXN0OiBVc2VyTG9naW5EZXRhaWxzKSB7XG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocGFzc3dvcmRDaGFuZ2VSZXF1ZXN0KTtcclxuXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcIi9Mb2dpbi9DaGFuZ2VQYXNzd29yZFwiLCBib2R5LCBvcHRpb25zKVxyXG4gICAgfVxuXG4gICAgZ2V0UGF5bWVudERhdGEodXNlckxvZ2luZ1JlcXVlc3Q6IFVzZXJMb2dpbkRldGFpbHMpe1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcIi9Vc2VyQWNjb3VudC9QZXJzb25hbEluZm9cIlxuICAgICAgICAgICAgKyBcIj9DdXN0b21lck51bWJlcj1cIiArIHVzZXJMb2dpbmdSZXF1ZXN0LkN1c3RvbWVyTnVtYmVyICsgXCImcGFzc3dvcmQ9XCIgKyB1c2VyTG9naW5nUmVxdWVzdC5QYXNzd29yZClcbiAgICAgICAgICAvLyAgLm1hcChyZXN1bHQgPT4gcmVzdWx0Lmpzb24oKS5tYXAob2JqID0+IG5ldyBVc2VyTG9naW5EZXRhaWxzKG9iaikpKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
