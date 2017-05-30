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
var UserAccountService = (function () {
    function UserAccountService(http) {
        this.http = http;
    }
    UserAccountService.prototype.getPaymentData = function (userLogingRequest) {
        return this.http.get("/UserAccount/PaymentData"
            + "?CustomerNumber=" + userLogingRequest.CustomerNumber + "&password=" + userLogingRequest.Password);
    };
    UserAccountService.prototype.getTransactionData = function (userLogingRequest) {
        return this.http.get("/UserAccount/TransactionData"
            + "?CustomerNumber=" + userLogingRequest.CustomerNumber + "&password=" + userLogingRequest.Password);
    };
    UserAccountService.prototype.getCustomerData = function (userLogingRequest) {
        return this.http.get("/UserAccount/PersonalInfo"
            + "?CustomerNumber=" + userLogingRequest.CustomerNumber + "&password=" + userLogingRequest.Password);
    };
    return UserAccountService;
}());
UserAccountService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserAccountService);
exports.UserAccountService = UserAccountService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1JlZnJlQ2VudHJvQXBwbGljYXRpb24vc3JjL1VzZXJBY2NvdW50L3VzZXItYWNjb3VudC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQThEO0FBTTlELElBQWEsa0JBQWtCO0lBRTNCLDRCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUM5QixDQUFDO0lBRUQsMkNBQWMsR0FBZCxVQUFlLGlCQUFtQztRQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMEJBQTBCO2NBQ3pDLGtCQUFrQixHQUFHLGlCQUFpQixDQUFDLGNBQWMsR0FBRyxZQUFZLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDNUcsQ0FBQztJQUVELCtDQUFrQixHQUFsQixVQUFtQixpQkFBbUM7UUFDbEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDhCQUE4QjtjQUM3QyxrQkFBa0IsR0FBRyxpQkFBaUIsQ0FBQyxjQUFjLEdBQUcsWUFBWSxHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzVHLENBQUM7SUFDRCw0Q0FBZSxHQUFmLFVBQWdCLGlCQUFtQztRQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQTJCO2NBQzFDLGtCQUFrQixHQUFHLGlCQUFpQixDQUFDLGNBQWMsR0FBRyxZQUFZLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDNUcsQ0FBQztJQUdMLHlCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQXBCWSxrQkFBa0I7SUFEOUIsaUJBQVUsRUFBRTtxQ0FHaUIsV0FBSTtHQUZyQixrQkFBa0IsQ0FvQjlCO0FBcEJZLGdEQUFrQiIsImZpbGUiOiJVc2VyQWNjb3VudC91c2VyLWFjY291bnQtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBVc2VyTG9naW5EZXRhaWxzIH0gZnJvbSAnLi4vTW9kZWxzL1VkZXJMb2dpbkRldGFpbHMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyQWNjb3VudFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgfVxuXG4gICAgZ2V0UGF5bWVudERhdGEodXNlckxvZ2luZ1JlcXVlc3Q6IFVzZXJMb2dpbkRldGFpbHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCIvVXNlckFjY291bnQvUGF5bWVudERhdGFcIlxuICAgICAgICAgICAgKyBcIj9DdXN0b21lck51bWJlcj1cIiArIHVzZXJMb2dpbmdSZXF1ZXN0LkN1c3RvbWVyTnVtYmVyICsgXCImcGFzc3dvcmQ9XCIgKyB1c2VyTG9naW5nUmVxdWVzdC5QYXNzd29yZClcbiAgICB9XG5cbiAgICBnZXRUcmFuc2FjdGlvbkRhdGEodXNlckxvZ2luZ1JlcXVlc3Q6IFVzZXJMb2dpbkRldGFpbHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCIvVXNlckFjY291bnQvVHJhbnNhY3Rpb25EYXRhXCJcbiAgICAgICAgICAgICsgXCI/Q3VzdG9tZXJOdW1iZXI9XCIgKyB1c2VyTG9naW5nUmVxdWVzdC5DdXN0b21lck51bWJlciArIFwiJnBhc3N3b3JkPVwiICsgdXNlckxvZ2luZ1JlcXVlc3QuUGFzc3dvcmQpXG4gICAgfVxuICAgIGdldEN1c3RvbWVyRGF0YSh1c2VyTG9naW5nUmVxdWVzdDogVXNlckxvZ2luRGV0YWlscykge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcIi9Vc2VyQWNjb3VudC9QZXJzb25hbEluZm9cIlxuICAgICAgICAgICAgKyBcIj9DdXN0b21lck51bWJlcj1cIiArIHVzZXJMb2dpbmdSZXF1ZXN0LkN1c3RvbWVyTnVtYmVyICsgXCImcGFzc3dvcmQ9XCIgKyB1c2VyTG9naW5nUmVxdWVzdC5QYXNzd29yZClcbiAgICB9XG5cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
