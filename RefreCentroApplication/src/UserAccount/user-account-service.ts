import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { UserLoginDetails } from '../Models/UderLoginDetails';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserAccountService {

    constructor(private http: Http) {
    }

    getPaymentData(userLogingRequest: UserLoginDetails) {
        return this.http.get("/UserAccount/PaymentData"
            + "?CustomerNumber=" + userLogingRequest.CustomerNumber + "&password=" + userLogingRequest.Password)
    }

    getTransactionData(userLogingRequest: UserLoginDetails) {
        return this.http.get("/UserAccount/TransactionData"
            + "?CustomerNumber=" + userLogingRequest.CustomerNumber + "&password=" + userLogingRequest.Password)
    }
    getCustomerData(userLogingRequest: UserLoginDetails) {
        return this.http.get("/UserAccount/PersonalInfo"
            + "?CustomerNumber=" + userLogingRequest.CustomerNumber + "&password=" + userLogingRequest.Password)
    }


}