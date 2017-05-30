import { Component, OnInit } from '@angular/core';
import { UserAccountService } from './user-account-service';
import { UserLoginDetails, TransactionSearchDetails, CustomerPaymentDetails } from '../Models/UderLoginDetails';
declare var jQuery: any;
declare var moment;

@Component({
    selector: 'user-account',
    templateUrl: '../src/UserAccount/user-account-component.html'
})

export class UserAccountComponent implements OnInit {

    userLoginDetails: UserLoginDetails = new UserLoginDetails();
    transactionSearchDetails: Array<TransactionSearchDetails> = new Array<TransactionSearchDetails>();
    customerPaymentDetails: Array<CustomerPaymentDetails> = new Array<CustomerPaymentDetails>();

    paymentsTab: boolean = false;
    transactionTab: boolean = false;
    //personalInfoTab: boolean = false;

    custStartDate: Date = moment().subtract(29, 'days');
    custEndDate: Date = moment();

    tranStartDate: Date = moment().subtract(29, 'days');
    tranEndDate: Date = moment();

    documentNumberFilter: string = 'all';
    appliedToDocTypeNumberFilter: string = 'all';
    orgTrxAmountFilter: string = 'all';
    rmDocTypeFilter: string = 'all';
    amountAppliedFilter: string = 'all';
    appliedDocDateFilter: string = 'all';

    isFiltersSet: boolean = false;
    static self: UserAccountComponent;

    constructor(private _service: UserAccountService) {
        this.userLoginDetails.CustomerNumber = localStorage.getItem('AccountNumber');
        UserAccountComponent.self = this;
    }

    ngOnInit() {
        //this.personalInfoTab = true;
        this.paymentsTab = true;
        this.showPersonalInfo();
        this.showPayments();
    }

    showTransactions() {
        this.transactionTab = true;
        this.userLoginDetails.CustomerNumber = localStorage.getItem('AccountNumber');

        this._service.getTransactionData(this.userLoginDetails).subscribe(

            value => {
                //this.personalInfoTab = false;
                this.paymentsTab = false;
                this.transactionSearchDetails = JSON.parse(value.text());
                var start = moment().subtract(29, 'days');
                var end = moment();

                function cb(start, end) {
                    jQuery('#transactionRange span').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));

                    UserAccountComponent.self.tranStartDate = moment(start);
                    UserAccountComponent.self.tranEndDate = moment(end);
                    UserAccountComponent.self.displayGridForTransactionDetails(UserAccountComponent.self.tranStartDate, UserAccountComponent.self.tranEndDate);
                }

                jQuery('#transactionRange').daterangepicker({
                    startDate: start,
                    endDate: end,
                    ranges: {
                        'Today': [moment(), moment()],
                        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
                        'Last Year': [moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year')],
                        'Last One Year': [moment().subtract(1, 'year'), moment()],
                    }
                }, cb)


                cb(start, end);
                this.displayGridForTransactionDetails(this.tranStartDate, this.tranEndDate);
            })
    }

    showPayments() {
        this.paymentsTab = true;
        this.documentNumberFilter= 'all';
        this.appliedToDocTypeNumberFilter= 'all';
        this.orgTrxAmountFilter = 'all';
        this.rmDocTypeFilter = 'all';
        this.amountAppliedFilter = 'all';
        this.appliedDocDateFilter= 'all';
        this.userLoginDetails.CustomerNumber = localStorage.getItem('AccountNumber');

        this._service.getPaymentData(this.userLoginDetails).subscribe(

            value => {
                this.transactionTab = false;
                //this.personalInfoTab = false;
                this.customerPaymentDetails = JSON.parse(value.text());

                for (var i = 0; i < this.customerPaymentDetails.length; i++) {
                    this.customerPaymentDetails[i].Document_Date = moment(this.customerPaymentDetails[i].Document_Date)._d;
                }
                var start = moment().subtract(29, 'days');
                var end = moment();

                function cb(start, end) {
                    jQuery('#paymentRange span').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));

                    UserAccountComponent.self.custStartDate = moment(start);
                    UserAccountComponent.self.custEndDate = moment(end);
                    UserAccountComponent.self.displayGridForPaymentDetails(UserAccountComponent.self.customerPaymentDetails);
                }

                jQuery('#paymentRange').daterangepicker({
                    startDate: start,
                    endDate: end,
                    ranges: {
                        'Today': [moment(), moment()],
                        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
                        'Last Year': [moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year')],
                        'Last One Year': [moment().subtract(1, 'year'), moment()],
                    }
                }, cb)
                cb(start, end);
                this.displayGridForPaymentDetails(this.customerPaymentDetails);
            })
    }

    showPersonalInfo() {
        this.userLoginDetails.CustomerNumber = localStorage.getItem('AccountNumber');

        this._service.getCustomerData(this.userLoginDetails).subscribe(

            value => {
                //this.paymentsTab = false;
                //this.transactionTab = false;

                this.userLoginDetails = JSON.parse(value.text());
                //this.displayGridForCustomerDetails(this.userLoginDetails);
            })
    }

    viewCustomerPaymentReport() {
        this.isFiltersSet = true;
        this.displayGridForPaymentDetails(this.customerPaymentDetails);
    }

    displayGridForPaymentDetails(customerPaymentDetails: Array<CustomerPaymentDetails>) {

        var paymentDetails;
        if (this.isFiltersSet) {

            paymentDetails = this.customerPaymentDetails.filter(
                x => x.Document_Date >= this.custStartDate && x.Document_Date <= this.custEndDate
                    && (x.Applied_to_Doc_Number.toLowerCase().includes(this.appliedToDocTypeNumberFilter.toLowerCase() == 'all' ? x.Applied_to_Doc_Number.toLowerCase() : this.appliedToDocTypeNumberFilter.toLowerCase()))
                    && x.Original_Trx_Amount.toString().includes(this.orgTrxAmountFilter.toLowerCase() == 'all' ? x.Original_Trx_Amount.toString() : this.orgTrxAmountFilter.toString())
                    && x.RM_Doc_Type.toLowerCase().includes(this.rmDocTypeFilter.toLowerCase() == 'all' ? x.RM_Doc_Type.toLowerCase() : this.rmDocTypeFilter.toLowerCase())
                    && x.Amount_Applied.toString().includes(this.amountAppliedFilter.toLowerCase() == 'all' ? x.Amount_Applied.toString() : this.amountAppliedFilter))
        }
        else {
            paymentDetails = customerPaymentDetails;
        }
        var jSondata = JSON.parse(JSON.stringify(paymentDetails));
        var table = jQuery('#paymentDetails').DataTable({
            "language": {
                "emptyTable": "No records to display."
            },
            "ordering": false,
            destroy: true,
            responsive: true,
            "pageLength": 10,
            "bLengthChange": false,
            "aaData": jSondata,
            "aoColumns": [

                {
                    "title": "Number",
                    "mData": null, "mRender": function (data, type, row) {
                        return row["Applied_to_Doc_Number"];
                    }
                },
                {
                    "title": "Customer Name",
                    "mData": null, "mRender": function (data, type, row) {
                        return row["Customer_Name"];
                    }
                },
                {
                    "title": "Document Number",
                    "mData": null, "mRender": function (data, type, row) {
                        return row["Document_Number"];
                    }
                },

                {
                    "title": "Date",
                    "mData": null, "mRender": function (data, type, row) {
                        return '';
                    }
                },
                {
                    "title": "Payment Type",
                    "mData": null, "mRender": function (data, type, row) {
                        return row["Document_Type_and_Number"];
                    }
                },
                {
                    "title": "Total Amount",
                    "mData": null, "mRender": function (data, type, row) {
                        return row["Total_Applied_Amount"];
                    }
                },
                {
                    "title": "Amount Applied",
                    "mData": null, "mRender": function (data, type, row) {
                        return row["Amount_Applied"];
                    }
                },
                {
                    "title": "Discount",
                    "mData": null, "mRender": function (data, type, row) {
                        return row["Discount"];
                    }
                }
            ],
            "createdRow": function (row, data, index) {

                if (jQuery('td', row).eq(3)) {
                    var span = document.createElement("span");
                    span.innerText = moment(data["Document_Date"]).format('MM-DD-YYYY');;
                    jQuery('td', row).eq(3).append(span);
                }
            }

        });
    }

    displayGridForTransactionDetails(startDate, endDate) {
        for (var i = 0; i < this.transactionSearchDetails.length; i++) {
            this.transactionSearchDetails[i].DocumentDate = moment(this.transactionSearchDetails[i].DocumentDate)._d;
        }
        var transactionDetails = this.transactionSearchDetails.filter(x => x.DocumentDate >= startDate && x.DocumentDate <= endDate)


        var jSondata = JSON.parse(JSON.stringify(transactionDetails));
        var table = jQuery('#transactionDetails').DataTable({
            "language": {
                "emptyTable": "No records to display."
            },
            "ordering": false,
            destroy: true,
            responsive: true,
            "pageLength": 5,
            "bLengthChange": false,
            "aaData": jSondata,
            "aoColumns": [
                {
                    "title": "Date",
                    "mData": null, "mRender": function (data, type, row) {
                        return '';
                    }
                },
                {
                    "title": "Number",
                    "mData": null, "mRender": function (data, type, row) {
                        return '';
                    }
                },
                {
                    "title": "Type",
                    "mData": null, "mRender": function (data, type, row) {
                        return row["SOPType"];
                    }
                },
                {
                    "title": "Store",
                    "mData": null, "mRender": function (data, type, row) {
                        return row["Name"];
                    }
                },

                {
                    "title": "Account Number",
                    "mData": null, "mRender": function (data, type, row) {
                        return row["AccountNumber"];
                    }
                },
                {
                    "title": "Customer Name",
                    "mData": null, "mRender": function (data, type, row) {
                        return row["CustomerName"];
                    }
                },
                {
                    "title": "Company",
                    "mData": null, "mRender": function (data, type, row) {
                        return row["Company"];
                    }
                },
                {
                    "title": "Cashier Name",
                    "mData": null, "mRender": function (data, type, row) {
                        return row["CashierName"];
                    }
                },
                {
                    "title": "Reference Number",
                    "mData": null, "mRender": function (data, type, row) {
                        return row["ReferenceNumber"];
                    }
                }
            ],
            "createdRow": function (row, data, index) {

                if (jQuery('td', row).eq(1)) {
                    var anchor = document.createElement("a");
                    anchor.innerText = data["SOPNumber"];
                    anchor.setAttribute("class", "dotted-border");
                    anchor.onclick = function () {
                        UserAccountComponent.self.showPayments();
                        UserAccountComponent.self.appliedToDocTypeNumberFilter = data["SOPNumber"];
                    };
                    jQuery('td', row).eq(1).append(anchor);
                }
                if (jQuery('td', row).eq(0)) {
                    var span = document.createElement("span");
                    span.innerText = moment(data["DocumentDate"]).format('MM-DD-YYYY');;
                    jQuery('td', row).eq(0).append(span);
                }
            }

        });
    }

    LogOut() {
        window.location.href = '/Login/Logoff';
    }
}
