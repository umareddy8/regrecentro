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
var login_service_1 = require("./login-service");
var UderLoginDetails_1 = require("../Models/UderLoginDetails");
var AppComponent = (function () {
    function AppComponent(_service) {
        this._service = _service;
        this.accountNumber = '';
        this.password = '';
        this.errorMessage = '';
        this.message = '';
        this.userLoginDetails = new UderLoginDetails_1.UserLoginDetails();
        this.customerDeatils = new Array();
        this.newPassword = '';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ValidateLogin = function () {
        var _this = this;
        this.shaObj = new jsSHA("SHA-1", "TEXT");
        this.shaObj.update(this.userLoginDetails.Password);
        this.userLoginDetails.Password = this.shaObj.getHash("HEX");
        this._service.validateLogin(this.userLoginDetails)
            .subscribe(function (value) {
            _this.validateLoginResponse = (value.text());
            if (_this.validateLoginResponse == "0") {
                // show user account page
                localStorage.setItem('AccountNumber', _this.userLoginDetails.CustomerNumber);
                window.location.href = '/UserAccount/UserAccount';
            }
            else if (_this.validateLoginResponse == "1") {
                // first login
                jQuery("#changePassword").modal('show');
                jQuery('#changePassword #confirm_password').on('keyup', function () {
                    if (jQuery('#changePassword #newpassword').val() == jQuery('#changePassword #confirm_password').val() &&
                        jQuery('#changePassword #newpassword').val() != '') {
                        jQuery('#message').html('Matching').css('color', 'green');
                        jQuery('#btnChangePwd').prop('disabled', false);
                    }
                    else {
                        jQuery('#message').html('Not Matching').css('color', 'red');
                        jQuery('#btnChangePwd').prop('disabled', true);
                    }
                });
                jQuery('#changePassword #confirm_password #acntNum #password').on('keydown', function (e) {
                    if (e.shiftKey && (e.which == 188 || e.which == 190)) {
                        e.preventDefault();
                    }
                });
            }
            else if (_this.validateLoginResponse == "-1") {
                // password inccorect
                jQuery("#divLoading").hide();
                jQuery("#alertModal").modal('show');
                _this.message = "Username/Password Incorrect !";
            }
            _this.GetPaymentInfo();
        }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.GetPaymentInfo = function () {
        var _this = this;
        this._service.getPaymentData(this.userLoginDetails)
            .subscribe(function (res) {
            _this.customerDeatils = res;
        }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.ChangePwd = function () {
        var _this = this;
        this.userLoginDetails.Password = this.newPassword;
        this._service.changePassword(this.userLoginDetails)
            .subscribe(function (sucess) {
            localStorage.setItem('AccountNumber', _this.userLoginDetails.CustomerNumber);
            window.location.href = '/UserAccount/UserAccount';
        }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.closemodal = function () {
        jQuery("#alertModal").modal('hide');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: '../src/Login/login-component.html'
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1JlZnJlQ2VudHJvQXBwbGljYXRpb24vc3JjL0xvZ2luL2xvZ2luLWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQWtEO0FBQ2xELGlEQUErQztBQUMvQywrREFBOEQ7QUFTOUQsSUFBYSxZQUFZO0lBYXJCLHNCQUFvQixRQUFzQjtRQUF0QixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBWDFDLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFFdEIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixxQkFBZ0IsR0FBcUIsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO1FBQzVELG9CQUFlLEdBQTRCLElBQUksS0FBSyxFQUFvQixDQUFDO1FBQ3pFLGdCQUFXLEdBQVcsRUFBRSxDQUFDO0lBTXpCLENBQUM7SUFDRCwrQkFBUSxHQUFSO0lBQ0EsQ0FBQztJQUdELG9DQUFhLEdBQWI7UUFBQSxpQkE4Q0M7UUE3Q0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO2FBQzdDLFNBQVMsQ0FDVixVQUFBLEtBQUs7WUFDRCxLQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUM1QyxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMscUJBQXFCLElB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QUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQzthQUM5QyxTQUFTLENBQ1YsVUFBQSxNQUFNO1lBQ0YsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzVFLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLDBCQUEwQixDQUFDO1FBQ3RELENBQUMsRUFDQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFFbkQsQ0FBQztJQUVELGlDQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDTCxtQkFBQztBQUFELENBNUZBLEFBNEZDLElBQUE7QUE1RlksWUFBWTtJQUx4QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsV0FBVyxFQUFFLG1DQUFtQztLQUNuRCxDQUFDO3FDQWVnQyw0QkFBWTtHQWJqQyxZQUFZLENBNEZ4QjtBQTVGWSxvQ0FBWSIsImZpbGUiOiJMb2dpbi9sb2dpbi1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICcuL2xvZ2luLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyTG9naW5EZXRhaWxzIH0gZnJvbSAnLi4vTW9kZWxzL1VkZXJMb2dpbkRldGFpbHMnO1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuZGVjbGFyZSB2YXIgbW9tZW50O1xyXG5kZWNsYXJlIHZhciBqc1NIQTogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi4vc3JjL0xvZ2luL2xvZ2luLWNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgYWNjb3VudE51bWJlcjogc3RyaW5nID0gJyc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nID0gJyc7XHJcbiAgICB2YWxpZGF0ZUxvZ2luUmVzcG9uc2U6IGFueTtcclxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmcgPSAnJztcclxuICAgIHVzZXJMb2dpbkRldGFpbHM6IFVzZXJMb2dpbkRldGFpbHMgPSBuZXcgVXNlckxvZ2luRGV0YWlscygpO1xyXG4gICAgY3VzdG9tZXJEZWF0aWxzOiBBcnJheTxVc2VyTG9naW5EZXRhaWxzPiA9IG5ldyBBcnJheTxVc2VyTG9naW5EZXRhaWxzPigpO1xyXG4gICAgbmV3UGFzc3dvcmQ6IHN0cmluZyA9ICcnO1xyXG5cdCBzaGFPYmo6IGFueTtcclxuICAgIGhhc2g6IFN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZXJ2aWNlOiBMb2dpblNlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcblxyXG4gICAgVmFsaWRhdGVMb2dpbigpIHtcclxuXHQgdGhpcy5zaGFPYmogPSBuZXcganNTSEEoXCJTSEEtMVwiLCBcIlRFWFRcIik7XHJcbiAgICAgICAgdGhpcy5zaGFPYmoudXBkYXRlKHRoaXMudXNlckxvZ2luRGV0YWlscy5QYXNzd29yZCk7XHJcbiAgICAgICAgdGhpcy51c2VyTG9naW5EZXRhaWxzLlBhc3N3b3JkID0gdGhpcy5zaGFPYmouZ2V0SGFzaChcIkhFWFwiKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlLnZhbGlkYXRlTG9naW4odGhpcy51c2VyTG9naW5EZXRhaWxzKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlTG9naW5SZXNwb25zZSA9ICh2YWx1ZS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVMb2dpblJlc3BvbnNlID09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2hvdyB1c2VyIGFjY291bnQgcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBY2NvdW50TnVtYmVyJywgdGhpcy51c2VyTG9naW5EZXRhaWxzLkN1c3RvbWVyTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvVXNlckFjY291bnQvVXNlckFjY291bnQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy52YWxpZGF0ZUxvZ2luUmVzcG9uc2UgPT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmaXJzdCBsb2dpblxyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShcIiNjaGFuZ2VQYXNzd29yZFwiKS5tb2RhbCgnc2hvdycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNjaGFuZ2VQYXNzd29yZCAjY29uZmlybV9wYXNzd29yZCcpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpRdWVyeSgnI2NoYW5nZVBhc3N3b3JkICNuZXdwYXNzd29yZCcpLnZhbCgpID09IGpRdWVyeSgnI2NoYW5nZVBhc3N3b3JkICNjb25maXJtX3Bhc3N3b3JkJykudmFsKCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2NoYW5nZVBhc3N3b3JkICNuZXdwYXNzd29yZCcpLnZhbCgpICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNtZXNzYWdlJykuaHRtbCgnTWF0Y2hpbmcnKS5jc3MoJ2NvbG9yJywgJ2dyZWVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNidG5DaGFuZ2VQd2QnKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI21lc3NhZ2UnKS5odG1sKCdOb3QgTWF0Y2hpbmcnKS5jc3MoJ2NvbG9yJywgJ3JlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjYnRuQ2hhbmdlUHdkJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgnI2NoYW5nZVBhc3N3b3JkICNjb25maXJtX3Bhc3N3b3JkICNhY250TnVtICNwYXNzd29yZCcpLm9uKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkgJiYgKGUud2hpY2ggPT0gMTg4IHx8IGUud2hpY2ggPT0gMTkwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnZhbGlkYXRlTG9naW5SZXNwb25zZSA9PSBcIi0xXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwYXNzd29yZCBpbmNjb3JlY3RcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoXCIjZGl2TG9hZGluZ1wiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KFwiI2FsZXJ0TW9kYWxcIikubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBcIlVzZXJuYW1lL1Bhc3N3b3JkIEluY29ycmVjdCAhXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdldFBheW1lbnRJbmZvKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgR2V0UGF5bWVudEluZm8oKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZS5nZXRQYXltZW50RGF0YSh0aGlzLnVzZXJMb2dpbkRldGFpbHMpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lckRlYXRpbHMgPSByZXNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBDaGFuZ2VQd2QoKSB7XHJcbiAgICAgICAgdGhpcy51c2VyTG9naW5EZXRhaWxzLlBhc3N3b3JkID0gdGhpcy5uZXdQYXNzd29yZDtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlLmNoYW5nZVBhc3N3b3JkKHRoaXMudXNlckxvZ2luRGV0YWlscylcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgc3VjZXNzID0+IHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBY2NvdW50TnVtYmVyJywgdGhpcy51c2VyTG9naW5EZXRhaWxzLkN1c3RvbWVyTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9Vc2VyQWNjb3VudC9Vc2VyQWNjb3VudCc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2Vtb2RhbCgpIHtcclxuICAgICAgICBqUXVlcnkoXCIjYWxlcnRNb2RhbFwiKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
