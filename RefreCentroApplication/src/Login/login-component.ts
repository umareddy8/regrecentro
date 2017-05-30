import { Component, OnInit } from '@angular/core';
import { LoginService } from './login-service';
import { UserLoginDetails } from '../Models/UderLoginDetails';
declare var jQuery: any;
declare var moment;
declare var jsSHA: any;
@Component({
    selector: 'my-app',
    templateUrl: '../src/Login/login-component.html'
})

export class AppComponent implements OnInit {

    accountNumber: string = '';
    password: string = '';
    validateLoginResponse: any;
    errorMessage: string = '';
    message: string = '';
    userLoginDetails: UserLoginDetails = new UserLoginDetails();
    customerDeatils: Array<UserLoginDetails> = new Array<UserLoginDetails>();
    newPassword: string = '';
	 shaObj: any;
    hash: String;

    constructor(private _service: LoginService) {

    }
    ngOnInit() {
    }


    ValidateLogin() {
	 this.shaObj = new jsSHA("SHA-1", "TEXT");
        this.shaObj.update(this.userLoginDetails.Password);
        this.userLoginDetails.Password = this.shaObj.getHash("HEX");
        
        this._service.validateLogin(this.userLoginDetails)
            .subscribe(
            value => {
                this.validateLoginResponse = (value.text());
                if (this.validateLoginResponse == "0") {
                    // show user account page
                    localStorage.setItem('AccountNumber', this.userLoginDetails.CustomerNumber);
                    window.location.href = '/UserAccount/UserAccount';
                }
                else if (this.validateLoginResponse == "1") {
                    // first login
                    jQuery("#changePassword").modal('show');

                    jQuery('#changePassword #confirm_password').on('keyup', function () {
                        if (jQuery('#changePassword #newpassword').val() == jQuery('#changePassword #confirm_password').val() &&
                            jQuery('#changePassword #newpassword').val() != '') {
                            jQuery('#message').html('Matching').css('color', 'green');
                            jQuery('#btnChangePwd').prop('disabled', false);
                        } else {
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
                else if (this.validateLoginResponse == "-1") {
                    // password inccorect
                    jQuery("#divLoading").hide();
                    jQuery("#alertModal").modal('show');
                    this.message = "Username/Password Incorrect !";
                }
                this.GetPaymentInfo();
            },
            error => this.errorMessage = <any>error);



    }

    GetPaymentInfo() {
        this._service.getPaymentData(this.userLoginDetails)
            .subscribe(
            (res: any) => {
                this.customerDeatils = res
            },
            error => this.errorMessage = <any>error);
    }

    ChangePwd() {
        this.userLoginDetails.Password = this.newPassword;
        this._service.changePassword(this.userLoginDetails)
            .subscribe(
            sucess => {
                localStorage.setItem('AccountNumber', this.userLoginDetails.CustomerNumber);
                window.location.href = '/UserAccount/UserAccount';
            },
              error => this.errorMessage = <any>error);

    }

    closemodal() {
        jQuery("#alertModal").modal('hide');
    }
}