import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { UserLoginDetails } from '../Models/UderLoginDetails';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LoginService {
    controller: string;
    commonController: string;
    constructor(private http: Http) {
        this.controller = "ApiLeave";
        this.commonController = "APICommon";
    }

    validateLogin(userLogingRequest : UserLoginDetails) {
        let body = JSON.stringify(userLogingRequest);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

         return this.http.post("/Login/Login", body, options)
    }

    changePassword(passwordChangeRequest: UserLoginDetails) {
        let body = JSON.stringify(passwordChangeRequest);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post("/Login/ChangePassword", body, options)
    }

    getPaymentData(userLogingRequest: UserLoginDetails){
        return this.http.get("/UserAccount/PersonalInfo"
            + "?CustomerNumber=" + userLogingRequest.CustomerNumber + "&password=" + userLogingRequest.Password)
          //  .map(result => result.json().map(obj => new UserLoginDetails(obj)));
    }
}