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
var user_account_service_1 = require("./user-account-service");
var UderLoginDetails_1 = require("../Models/UderLoginDetails");
var UserAccountComponent = UserAccountComponent_1 = (function () {
    function UserAccountComponent(_service) {
        this._service = _service;
        this.userLoginDetails = new UderLoginDetails_1.UserLoginDetails();
        this.transactionSearchDetails = new Array();
        this.customerPaymentDetails = new Array();
        this.paymentsTab = false;
        this.transactionTab = false;
        //personalInfoTab: boolean = false;
        this.custStartDate = moment().subtract(29, 'days');
        this.custEndDate = moment();
        this.tranStartDate = moment().subtract(29, 'days');
        this.tranEndDate = moment();
        this.documentNumberFilter = 'all';
        this.appliedToDocTypeNumberFilter = 'all';
        this.orgTrxAmountFilter = 'all';
        this.rmDocTypeFilter = 'all';
        this.amountAppliedFilter = 'all';
        this.appliedDocDateFilter = 'all';
        this.isFiltersSet = false;
        this.userLoginDetails.CustomerNumber = localStorage.getItem('AccountNumber');
        UserAccountComponent_1.self = this;
    }
    UserAccountComponent.prototype.ngOnInit = function () {
        //this.personalInfoTab = true;
        this.paymentsTab = true;
        this.showPersonalInfo();
        this.showPayments();
    };
    UserAccountComponent.prototype.showTransactions = function () {
        var _this = this;
        this.transactionTab = true;
        this.userLoginDetails.CustomerNumber = localStorage.getItem('AccountNumber');
        this._service.getTransactionData(this.userLoginDetails).subscribe(function (value) {
            //this.personalInfoTab = false;
            _this.paymentsTab = false;
            _this.transactionSearchDetails = JSON.parse(value.text());
            var start = moment().subtract(29, 'days');
            var end = moment();
            function cb(start, end) {
                jQuery('#transactionRange span').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));
                UserAccountComponent_1.self.tranStartDate = moment(start);
                UserAccountComponent_1.self.tranEndDate = moment(end);
                UserAccountComponent_1.self.displayGridForTransactionDetails(UserAccountComponent_1.self.tranStartDate, UserAccountComponent_1.self.tranEndDate);
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
            }, cb);
            cb(start, end);
            _this.displayGridForTransactionDetails(_this.tranStartDate, _this.tranEndDate);
        });
    };
    UserAccountComponent.prototype.showPayments = function () {
        var _this = this;
        this.paymentsTab = true;
        this.documentNumberFilter = 'all';
        this.appliedToDocTypeNumberFilter = 'all';
        this.orgTrxAmountFilter = 'all';
        this.rmDocTypeFilter = 'all';
        this.amountAppliedFilter = 'all';
        this.appliedDocDateFilter = 'all';
        this.userLoginDetails.CustomerNumber = localStorage.getItem('AccountNumber');
        this._service.getPaymentData(this.userLoginDetails).subscribe(function (value) {
            _this.transactionTab = false;
            //this.personalInfoTab = false;
            _this.customerPaymentDetails = JSON.parse(value.text());
            for (var i = 0; i < _this.customerPaymentDetails.length; i++) {
                _this.customerPaymentDetails[i].Document_Date = moment(_this.customerPaymentDetails[i].Document_Date)._d;
            }
            var start = moment().subtract(29, 'days');
            var end = moment();
            function cb(start, end) {
                jQuery('#paymentRange span').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));
                UserAccountComponent_1.self.custStartDate = moment(start);
                UserAccountComponent_1.self.custEndDate = moment(end);
                UserAccountComponent_1.self.displayGridForPaymentDetails(UserAccountComponent_1.self.customerPaymentDetails);
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
            }, cb);
            cb(start, end);
            _this.displayGridForPaymentDetails(_this.customerPaymentDetails);
        });
    };
    UserAccountComponent.prototype.showPersonalInfo = function () {
        var _this = this;
        this.userLoginDetails.CustomerNumber = localStorage.getItem('AccountNumber');
        this._service.getCustomerData(this.userLoginDetails).subscribe(function (value) {
            //this.paymentsTab = false;
            //this.transactionTab = false;
            _this.userLoginDetails = JSON.parse(value.text());
            //this.displayGridForCustomerDetails(this.userLoginDetails);
        });
    };
    UserAccountComponent.prototype.viewCustomerPaymentReport = function () {
        this.isFiltersSet = true;
        this.displayGridForPaymentDetails(this.customerPaymentDetails);
    };
    UserAccountComponent.prototype.displayGridForPaymentDetails = function (customerPaymentDetails) {
        var _this = this;
        var paymentDetails;
        if (this.isFiltersSet) {
            paymentDetails = this.customerPaymentDetails.filter(function (x) { return x.Document_Date >= _this.custStartDate && x.Document_Date <= _this.custEndDate
                && (x.Applied_to_Doc_Number.toLowerCase().includes(_this.appliedToDocTypeNumberFilter.toLowerCase() == 'all' ? x.Applied_to_Doc_Number.toLowerCase() : _this.appliedToDocTypeNumberFilter.toLowerCase()))
                && x.Original_Trx_Amount.toString().includes(_this.orgTrxAmountFilter.toLowerCase() == 'all' ? x.Original_Trx_Amount.toString() : _this.orgTrxAmountFilter.toString())
                && x.RM_Doc_Type.toLowerCase().includes(_this.rmDocTypeFilter.toLowerCase() == 'all' ? x.RM_Doc_Type.toLowerCase() : _this.rmDocTypeFilter.toLowerCase())
                && x.Amount_Applied.toString().includes(_this.amountAppliedFilter.toLowerCase() == 'all' ? x.Amount_Applied.toString() : _this.amountAppliedFilter); });
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
                    span.innerText = moment(data["Document_Date"]).format('MM-DD-YYYY');
                    ;
                    jQuery('td', row).eq(3).append(span);
                }
            }
        });
    };
    UserAccountComponent.prototype.displayGridForTransactionDetails = function (startDate, endDate) {
        for (var i = 0; i < this.transactionSearchDetails.length; i++) {
            this.transactionSearchDetails[i].DocumentDate = moment(this.transactionSearchDetails[i].DocumentDate)._d;
        }
        var transactionDetails = this.transactionSearchDetails.filter(function (x) { return x.DocumentDate >= startDate && x.DocumentDate <= endDate; });
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
                        UserAccountComponent_1.self.showPayments();
                        UserAccountComponent_1.self.appliedToDocTypeNumberFilter = data["SOPNumber"];
                    };
                    jQuery('td', row).eq(1).append(anchor);
                }
                if (jQuery('td', row).eq(0)) {
                    var span = document.createElement("span");
                    span.innerText = moment(data["DocumentDate"]).format('MM-DD-YYYY');
                    ;
                    jQuery('td', row).eq(0).append(span);
                }
            }
        });
    };
    UserAccountComponent.prototype.LogOut = function () {
        window.location.href = '/Login/Logoff';
    };
    return UserAccountComponent;
}());
UserAccountComponent = UserAccountComponent_1 = __decorate([
    core_1.Component({
        selector: 'user-account',
        templateUrl: '../src/UserAccount/user-account-component.html'
    }),
    __metadata("design:paramtypes", [user_account_service_1.UserAccountService])
], UserAccountComponent);
exports.UserAccountComponent = UserAccountComponent;
var UserAccountComponent_1;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1JlZnJlQ2VudHJvQXBwbGljYXRpb24vc3JjL1VzZXJBY2NvdW50L3VzZXItYWNjb3VudC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFrRDtBQUNsRCwrREFBNEQ7QUFDNUQsK0RBQWdIO0FBU2hILElBQWEsb0JBQW9CO0lBMEI3Qiw4QkFBb0IsUUFBNEI7UUFBNUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUF4QmhELHFCQUFnQixHQUFxQixJQUFJLG1DQUFnQixFQUFFLENBQUM7UUFDNUQsNkJBQXdCLEdBQW9DLElBQUksS0FBSyxFQUE0QixDQUFDO1FBQ2xHLDJCQUFzQixHQUFrQyxJQUFJLEtBQUssRUFBMEIsQ0FBQztRQUU1RixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxtQ0FBbUM7UUFFbkMsa0JBQWEsR0FBUyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELGdCQUFXLEdBQVMsTUFBTSxFQUFFLENBQUM7UUFFN0Isa0JBQWEsR0FBUyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELGdCQUFXLEdBQVMsTUFBTSxFQUFFLENBQUM7UUFFN0IseUJBQW9CLEdBQVcsS0FBSyxDQUFDO1FBQ3JDLGlDQUE0QixHQUFXLEtBQUssQ0FBQztRQUM3Qyx1QkFBa0IsR0FBVyxLQUFLLENBQUM7UUFDbkMsb0JBQWUsR0FBVyxLQUFLLENBQUM7UUFDaEMsd0JBQW1CLEdBQVcsS0FBSyxDQUFDO1FBQ3BDLHlCQUFvQixHQUFXLEtBQUssQ0FBQztRQUVyQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUkxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0Usc0JBQW9CLENB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Q0FBQyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUMvRSxDQUFDLENBQUM7b0JBQ0YsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQUNELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUFBLENBQUM7b0JBQ3BFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekMsQ0FBQztZQUNMLENBQUM7U0FFSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQscUNBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztJQUMzQyxDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQTVVQSxBQTRVQyxJQUFBO0FBNVVZLG9CQUFvQjtJQUxoQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsV0FBVyxFQUFFLGdEQUFnRDtLQUNoRSxDQUFDO3FDQTRCZ0MseUNBQWtCO0dBMUJ2QyxvQkFBb0IsQ0E0VWhDO0FBNVVZLG9EQUFvQiIsImZpbGUiOiJVc2VyQWNjb3VudC91c2VyLWFjY291bnQtY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlckFjY291bnRTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLWFjY291bnQtc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJMb2dpbkRldGFpbHMsIFRyYW5zYWN0aW9uU2VhcmNoRGV0YWlscywgQ3VzdG9tZXJQYXltZW50RGV0YWlscyB9IGZyb20gJy4uL01vZGVscy9VZGVyTG9naW5EZXRhaWxzJztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIG1vbWVudDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1c2VyLWFjY291bnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuLi9zcmMvVXNlckFjY291bnQvdXNlci1hY2NvdW50LWNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJBY2NvdW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICB1c2VyTG9naW5EZXRhaWxzOiBVc2VyTG9naW5EZXRhaWxzID0gbmV3IFVzZXJMb2dpbkRldGFpbHMoKTtcclxuICAgIHRyYW5zYWN0aW9uU2VhcmNoRGV0YWlsczogQXJyYXk8VHJhbnNhY3Rpb25TZWFyY2hEZXRhaWxzPiA9IG5ldyBBcnJheTxUcmFuc2FjdGlvblNlYXJjaERldGFpbHM+KCk7XHJcbiAgICBjdXN0b21lclBheW1lbnREZXRhaWxzOiBBcnJheTxDdXN0b21lclBheW1lbnREZXRhaWxzPiA9IG5ldyBBcnJheTxDdXN0b21lclBheW1lbnREZXRhaWxzPigpO1xyXG5cclxuICAgIHBheW1lbnRzVGFiOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICB0cmFuc2FjdGlvblRhYjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy9wZXJzb25hbEluZm9UYWI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjdXN0U3RhcnREYXRlOiBEYXRlID0gbW9tZW50KCkuc3VidHJhY3QoMjksICdkYXlzJyk7XHJcbiAgICBjdXN0RW5kRGF0ZTogRGF0ZSA9IG1vbWVudCgpO1xyXG5cclxuICAgIHRyYW5TdGFydERhdGU6IERhdGUgPSBtb21lbnQoKS5zdWJ0cmFjdCgyOSwgJ2RheXMnKTtcclxuICAgIHRyYW5FbmREYXRlOiBEYXRlID0gbW9tZW50KCk7XHJcblxyXG4gICAgZG9jdW1lbnROdW1iZXJGaWx0ZXI6IHN0cmluZyA9ICdhbGwnO1xyXG4gICAgYXBwbGllZFRvRG9jVHlwZU51bWJlckZpbHRlcjogc3RyaW5nID0gJ2FsbCc7XHJcbiAgICBvcmdUcnhBbW91bnRGaWx0ZXI6IHN0cmluZyA9ICdhbGwnO1xyXG4gICAgcm1Eb2NUeXBlRmlsdGVyOiBzdHJpbmcgPSAnYWxsJztcclxuICAgIGFtb3VudEFwcGxpZWRGaWx0ZXI6IHN0cmluZyA9ICdhbGwnO1xyXG4gICAgYXBwbGllZERvY0RhdGVGaWx0ZXI6IHN0cmluZyA9ICdhbGwnO1xyXG5cclxuICAgIGlzRmlsdGVyc1NldDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc3RhdGljIHNlbGY6IFVzZXJBY2NvdW50Q29tcG9uZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlcnZpY2U6IFVzZXJBY2NvdW50U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMudXNlckxvZ2luRGV0YWlscy5DdXN0b21lck51bWJlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBY2NvdW50TnVtYmVyJyk7XHJcbiAgICAgICAgVXNlckFjY291bnRDb21wb25lbnQuc2VsZiA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy90aGlzLnBlcnNvbmFsSW5mb1RhYiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wYXltZW50c1RhYiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaG93UGVyc29uYWxJbmZvKCk7XHJcbiAgICAgICAgdGhpcy5zaG93UGF5bWVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93VHJhbnNhY3Rpb25zKCkge1xyXG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25UYWIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXNlckxvZ2luRGV0YWlscy5DdXN0b21lck51bWJlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBY2NvdW50TnVtYmVyJyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3NlcnZpY2UuZ2V0VHJhbnNhY3Rpb25EYXRhKHRoaXMudXNlckxvZ2luRGV0YWlscykuc3Vic2NyaWJlKFxyXG5cclxuICAgICAgICAgICAgdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnBlcnNvbmFsSW5mb1RhYiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXltZW50c1RhYiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2FjdGlvblNlYXJjaERldGFpbHMgPSBKU09OLnBhcnNlKHZhbHVlLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBtb21lbnQoKS5zdWJ0cmFjdCgyOSwgJ2RheXMnKTtcclxuICAgICAgICAgICAgICAgIHZhciBlbmQgPSBtb21lbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjYihzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCcjdHJhbnNhY3Rpb25SYW5nZSBzcGFuJykuaHRtbChzdGFydC5mb3JtYXQoJ01NTSBELCBZWVlZJykgKyAnIC0gJyArIGVuZC5mb3JtYXQoJ01NTSBELCBZWVlZJykpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVc2VyQWNjb3VudENvbXBvbmVudC5zZWxmLnRyYW5TdGFydERhdGUgPSBtb21lbnQoc3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJBY2NvdW50Q29tcG9uZW50LnNlbGYudHJhbkVuZERhdGUgPSBtb21lbnQoZW5kKTtcclxuICAgICAgICAgICAgICAgICAgICBVc2VyQWNjb3VudENvbXBvbmVudC5zZWxmLmRpc3BsYXlHcmlkRm9yVHJhbnNhY3Rpb25EZXRhaWxzKFVzZXJBY2NvdW50Q29tcG9uZW50LnNlbGYudHJhblN0YXJ0RGF0ZSwgVXNlckFjY291bnRDb21wb25lbnQuc2VsZi50cmFuRW5kRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjdHJhbnNhY3Rpb25SYW5nZScpLmRhdGVyYW5nZXBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlOiBzdGFydCxcclxuICAgICAgICAgICAgICAgICAgICBlbmREYXRlOiBlbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdUb2RheSc6IFttb21lbnQoKSwgbW9tZW50KCldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnTGFzdCAzMCBEYXlzJzogW21vbWVudCgpLnN1YnRyYWN0KDI5LCAnZGF5cycpLCBtb21lbnQoKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdMYXN0IE1vbnRoJzogW21vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLmVuZE9mKCdtb250aCcpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0xhc3QgWWVhcic6IFttb21lbnQoKS5zdWJ0cmFjdCgxLCAneWVhcicpLnN0YXJ0T2YoJ3llYXInKSwgbW9tZW50KCkuc3VidHJhY3QoMSwgJ3llYXInKS5lbmRPZigneWVhcicpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0xhc3QgT25lIFllYXInOiBbbW9tZW50KCkuc3VidHJhY3QoMSwgJ3llYXInKSwgbW9tZW50KCldLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIGNiKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjYihzdGFydCwgZW5kKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUdyaWRGb3JUcmFuc2FjdGlvbkRldGFpbHModGhpcy50cmFuU3RhcnREYXRlLCB0aGlzLnRyYW5FbmREYXRlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93UGF5bWVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5wYXltZW50c1RhYiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kb2N1bWVudE51bWJlckZpbHRlcj0gJ2FsbCc7XHJcbiAgICAgICAgdGhpcy5hcHBsaWVkVG9Eb2NUeXBlTnVtYmVyRmlsdGVyPSAnYWxsJztcclxuICAgICAgICB0aGlzLm9yZ1RyeEFtb3VudEZpbHRlciA9ICdhbGwnO1xyXG4gICAgICAgIHRoaXMucm1Eb2NUeXBlRmlsdGVyID0gJ2FsbCc7XHJcbiAgICAgICAgdGhpcy5hbW91bnRBcHBsaWVkRmlsdGVyID0gJ2FsbCc7XHJcbiAgICAgICAgdGhpcy5hcHBsaWVkRG9jRGF0ZUZpbHRlcj0gJ2FsbCc7XHJcbiAgICAgICAgdGhpcy51c2VyTG9naW5EZXRhaWxzLkN1c3RvbWVyTnVtYmVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FjY291bnROdW1iZXInKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc2VydmljZS5nZXRQYXltZW50RGF0YSh0aGlzLnVzZXJMb2dpbkRldGFpbHMpLnN1YnNjcmliZShcclxuXHJcbiAgICAgICAgICAgIHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25UYWIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5wZXJzb25hbEluZm9UYWIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJQYXltZW50RGV0YWlscyA9IEpTT04ucGFyc2UodmFsdWUudGV4dCgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY3VzdG9tZXJQYXltZW50RGV0YWlscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tZXJQYXltZW50RGV0YWlsc1tpXS5Eb2N1bWVudF9EYXRlID0gbW9tZW50KHRoaXMuY3VzdG9tZXJQYXltZW50RGV0YWlsc1tpXS5Eb2N1bWVudF9EYXRlKS5fZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IG1vbWVudCgpLnN1YnRyYWN0KDI5LCAnZGF5cycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVuZCA9IG1vbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNiKHN0YXJ0LCBlbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyNwYXltZW50UmFuZ2Ugc3BhbicpLmh0bWwoc3RhcnQuZm9ybWF0KCdNTU0gRCwgWVlZWScpICsgJyAtICcgKyBlbmQuZm9ybWF0KCdNTU0gRCwgWVlZWScpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckFjY291bnRDb21wb25lbnQuc2VsZi5jdXN0U3RhcnREYXRlID0gbW9tZW50KHN0YXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICBVc2VyQWNjb3VudENvbXBvbmVudC5zZWxmLmN1c3RFbmREYXRlID0gbW9tZW50KGVuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlckFjY291bnRDb21wb25lbnQuc2VsZi5kaXNwbGF5R3JpZEZvclBheW1lbnREZXRhaWxzKFVzZXJBY2NvdW50Q29tcG9uZW50LnNlbGYuY3VzdG9tZXJQYXltZW50RGV0YWlscyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcjcGF5bWVudFJhbmdlJykuZGF0ZXJhbmdlcGlja2VyKHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydERhdGU6IHN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZERhdGU6IGVuZCxcclxuICAgICAgICAgICAgICAgICAgICByYW5nZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1RvZGF5JzogW21vbWVudCgpLCBtb21lbnQoKV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdMYXN0IE1vbnRoJzogW21vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudCgpLnN1YnRyYWN0KDEsICdtb250aCcpLmVuZE9mKCdtb250aCcpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0xhc3QgWWVhcic6IFttb21lbnQoKS5zdWJ0cmFjdCgxLCAneWVhcicpLnN0YXJ0T2YoJ3llYXInKSwgbW9tZW50KCkuc3VidHJhY3QoMSwgJ3llYXInKS5lbmRPZigneWVhcicpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0xhc3QgT25lIFllYXInOiBbbW9tZW50KCkuc3VidHJhY3QoMSwgJ3llYXInKSwgbW9tZW50KCldLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIGNiKVxyXG4gICAgICAgICAgICAgICAgY2Ioc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlHcmlkRm9yUGF5bWVudERldGFpbHModGhpcy5jdXN0b21lclBheW1lbnREZXRhaWxzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93UGVyc29uYWxJbmZvKCkge1xyXG4gICAgICAgIHRoaXMudXNlckxvZ2luRGV0YWlscy5DdXN0b21lck51bWJlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBY2NvdW50TnVtYmVyJyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3NlcnZpY2UuZ2V0Q3VzdG9tZXJEYXRhKHRoaXMudXNlckxvZ2luRGV0YWlscykuc3Vic2NyaWJlKFxyXG5cclxuICAgICAgICAgICAgdmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnBheW1lbnRzVGFiID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMudHJhbnNhY3Rpb25UYWIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJMb2dpbkRldGFpbHMgPSBKU09OLnBhcnNlKHZhbHVlLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuZGlzcGxheUdyaWRGb3JDdXN0b21lckRldGFpbHModGhpcy51c2VyTG9naW5EZXRhaWxzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB2aWV3Q3VzdG9tZXJQYXltZW50UmVwb3J0KCkge1xyXG4gICAgICAgIHRoaXMuaXNGaWx0ZXJzU2V0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlHcmlkRm9yUGF5bWVudERldGFpbHModGhpcy5jdXN0b21lclBheW1lbnREZXRhaWxzKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5R3JpZEZvclBheW1lbnREZXRhaWxzKGN1c3RvbWVyUGF5bWVudERldGFpbHM6IEFycmF5PEN1c3RvbWVyUGF5bWVudERldGFpbHM+KSB7XHJcblxyXG4gICAgICAgIHZhciBwYXltZW50RGV0YWlscztcclxuICAgICAgICBpZiAodGhpcy5pc0ZpbHRlcnNTZXQpIHtcclxuXHJcbiAgICAgICAgICAgIHBheW1lbnREZXRhaWxzID0gdGhpcy5jdXN0b21lclBheW1lbnREZXRhaWxzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIHggPT4geC5Eb2N1bWVudF9EYXRlID49IHRoaXMuY3VzdFN0YXJ0RGF0ZSAmJiB4LkRvY3VtZW50X0RhdGUgPD0gdGhpcy5jdXN0RW5kRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICYmICh4LkFwcGxpZWRfdG9fRG9jX051bWJlci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuYXBwbGllZFRvRG9jVHlwZU51bWJlckZpbHRlci50b0xvd2VyQ2FzZSgpID09ICdhbGwnID8geC5BcHBsaWVkX3RvX0RvY19OdW1iZXIudG9Mb3dlckNhc2UoKSA6IHRoaXMuYXBwbGllZFRvRG9jVHlwZU51bWJlckZpbHRlci50b0xvd2VyQ2FzZSgpKSlcclxuICAgICAgICAgICAgICAgICAgICAmJiB4Lk9yaWdpbmFsX1RyeF9BbW91bnQudG9TdHJpbmcoKS5pbmNsdWRlcyh0aGlzLm9yZ1RyeEFtb3VudEZpbHRlci50b0xvd2VyQ2FzZSgpID09ICdhbGwnID8geC5PcmlnaW5hbF9UcnhfQW1vdW50LnRvU3RyaW5nKCkgOiB0aGlzLm9yZ1RyeEFtb3VudEZpbHRlci50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgICAgICYmIHguUk1fRG9jX1R5cGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnJtRG9jVHlwZUZpbHRlci50b0xvd2VyQ2FzZSgpID09ICdhbGwnID8geC5STV9Eb2NfVHlwZS50b0xvd2VyQ2FzZSgpIDogdGhpcy5ybURvY1R5cGVGaWx0ZXIudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAmJiB4LkFtb3VudF9BcHBsaWVkLnRvU3RyaW5nKCkuaW5jbHVkZXModGhpcy5hbW91bnRBcHBsaWVkRmlsdGVyLnRvTG93ZXJDYXNlKCkgPT0gJ2FsbCcgPyB4LkFtb3VudF9BcHBsaWVkLnRvU3RyaW5nKCkgOiB0aGlzLmFtb3VudEFwcGxpZWRGaWx0ZXIpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcGF5bWVudERldGFpbHMgPSBjdXN0b21lclBheW1lbnREZXRhaWxzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgalNvbmRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHBheW1lbnREZXRhaWxzKSk7XHJcbiAgICAgICAgdmFyIHRhYmxlID0galF1ZXJ5KCcjcGF5bWVudERldGFpbHMnKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBcImxhbmd1YWdlXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZW1wdHlUYWJsZVwiOiBcIk5vIHJlY29yZHMgdG8gZGlzcGxheS5cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIm9yZGVyaW5nXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBkZXN0cm95OiB0cnVlLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBcInBhZ2VMZW5ndGhcIjogMTAsXHJcbiAgICAgICAgICAgIFwiYkxlbmd0aENoYW5nZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJhYURhdGFcIjogalNvbmRhdGEsXHJcbiAgICAgICAgICAgIFwiYW9Db2x1bW5zXCI6IFtcclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibURhdGFcIjogbnVsbCwgXCJtUmVuZGVyXCI6IGZ1bmN0aW9uIChkYXRhLCB0eXBlLCByb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvd1tcIkFwcGxpZWRfdG9fRG9jX051bWJlclwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJDdXN0b21lciBOYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtRGF0YVwiOiBudWxsLCBcIm1SZW5kZXJcIjogZnVuY3Rpb24gKGRhdGEsIHR5cGUsIHJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm93W1wiQ3VzdG9tZXJfTmFtZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJEb2N1bWVudCBOdW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1EYXRhXCI6IG51bGwsIFwibVJlbmRlclwiOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgcm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3dbXCJEb2N1bWVudF9OdW1iZXJcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1EYXRhXCI6IG51bGwsIFwibVJlbmRlclwiOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgcm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJQYXltZW50IFR5cGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1EYXRhXCI6IG51bGwsIFwibVJlbmRlclwiOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgcm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3dbXCJEb2N1bWVudF9UeXBlX2FuZF9OdW1iZXJcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiVG90YWwgQW1vdW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtRGF0YVwiOiBudWxsLCBcIm1SZW5kZXJcIjogZnVuY3Rpb24gKGRhdGEsIHR5cGUsIHJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm93W1wiVG90YWxfQXBwbGllZF9BbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiQW1vdW50IEFwcGxpZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1EYXRhXCI6IG51bGwsIFwibVJlbmRlclwiOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgcm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3dbXCJBbW91bnRfQXBwbGllZFwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJEaXNjb3VudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibURhdGFcIjogbnVsbCwgXCJtUmVuZGVyXCI6IGZ1bmN0aW9uIChkYXRhLCB0eXBlLCByb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvd1tcIkRpc2NvdW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJjcmVhdGVkUm93XCI6IGZ1bmN0aW9uIChyb3csIGRhdGEsIGluZGV4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGpRdWVyeSgndGQnLCByb3cpLmVxKDMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuLmlubmVyVGV4dCA9IG1vbWVudChkYXRhW1wiRG9jdW1lbnRfRGF0ZVwiXSkuZm9ybWF0KCdNTS1ERC1ZWVlZJyk7O1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgndGQnLCByb3cpLmVxKDMpLmFwcGVuZChzcGFuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5R3JpZEZvclRyYW5zYWN0aW9uRGV0YWlscyhzdGFydERhdGUsIGVuZERhdGUpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudHJhbnNhY3Rpb25TZWFyY2hEZXRhaWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJhbnNhY3Rpb25TZWFyY2hEZXRhaWxzW2ldLkRvY3VtZW50RGF0ZSA9IG1vbWVudCh0aGlzLnRyYW5zYWN0aW9uU2VhcmNoRGV0YWlsc1tpXS5Eb2N1bWVudERhdGUpLl9kO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdHJhbnNhY3Rpb25EZXRhaWxzID0gdGhpcy50cmFuc2FjdGlvblNlYXJjaERldGFpbHMuZmlsdGVyKHggPT4geC5Eb2N1bWVudERhdGUgPj0gc3RhcnREYXRlICYmIHguRG9jdW1lbnREYXRlIDw9IGVuZERhdGUpXHJcblxyXG5cclxuICAgICAgICB2YXIgalNvbmRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRyYW5zYWN0aW9uRGV0YWlscykpO1xyXG4gICAgICAgIHZhciB0YWJsZSA9IGpRdWVyeSgnI3RyYW5zYWN0aW9uRGV0YWlscycpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIFwibGFuZ3VhZ2VcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJlbXB0eVRhYmxlXCI6IFwiTm8gcmVjb3JkcyB0byBkaXNwbGF5LlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwib3JkZXJpbmdcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIGRlc3Ryb3k6IHRydWUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIFwicGFnZUxlbmd0aFwiOiA1LFxyXG4gICAgICAgICAgICBcImJMZW5ndGhDaGFuZ2VcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiYWFEYXRhXCI6IGpTb25kYXRhLFxyXG4gICAgICAgICAgICBcImFvQ29sdW1uc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkRhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1EYXRhXCI6IG51bGwsIFwibVJlbmRlclwiOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgcm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJOdW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1EYXRhXCI6IG51bGwsIFwibVJlbmRlclwiOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgcm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJUeXBlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtRGF0YVwiOiBudWxsLCBcIm1SZW5kZXJcIjogZnVuY3Rpb24gKGRhdGEsIHR5cGUsIHJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm93W1wiU09QVHlwZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJTdG9yZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibURhdGFcIjogbnVsbCwgXCJtUmVuZGVyXCI6IGZ1bmN0aW9uIChkYXRhLCB0eXBlLCByb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvd1tcIk5hbWVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkFjY291bnQgTnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtRGF0YVwiOiBudWxsLCBcIm1SZW5kZXJcIjogZnVuY3Rpb24gKGRhdGEsIHR5cGUsIHJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm93W1wiQWNjb3VudE51bWJlclwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJDdXN0b21lciBOYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJtRGF0YVwiOiBudWxsLCBcIm1SZW5kZXJcIjogZnVuY3Rpb24gKGRhdGEsIHR5cGUsIHJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm93W1wiQ3VzdG9tZXJOYW1lXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkNvbXBhbnlcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1EYXRhXCI6IG51bGwsIFwibVJlbmRlclwiOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgcm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3dbXCJDb21wYW55XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkNhc2hpZXIgTmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibURhdGFcIjogbnVsbCwgXCJtUmVuZGVyXCI6IGZ1bmN0aW9uIChkYXRhLCB0eXBlLCByb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvd1tcIkNhc2hpZXJOYW1lXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlJlZmVyZW5jZSBOdW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm1EYXRhXCI6IG51bGwsIFwibVJlbmRlclwiOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgcm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3dbXCJSZWZlcmVuY2VOdW1iZXJcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcImNyZWF0ZWRSb3dcIjogZnVuY3Rpb24gKHJvdywgZGF0YSwgaW5kZXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KCd0ZCcsIHJvdykuZXEoMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yLmlubmVyVGV4dCA9IGRhdGFbXCJTT1BOdW1iZXJcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZG90dGVkLWJvcmRlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBhbmNob3Iub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckFjY291bnRDb21wb25lbnQuc2VsZi5zaG93UGF5bWVudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXNlckFjY291bnRDb21wb25lbnQuc2VsZi5hcHBsaWVkVG9Eb2NUeXBlTnVtYmVyRmlsdGVyID0gZGF0YVtcIlNPUE51bWJlclwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSgndGQnLCByb3cpLmVxKDEpLmFwcGVuZChhbmNob3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGpRdWVyeSgndGQnLCByb3cpLmVxKDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuLmlubmVyVGV4dCA9IG1vbWVudChkYXRhW1wiRG9jdW1lbnREYXRlXCJdKS5mb3JtYXQoJ01NLURELVlZWVknKTs7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCd0ZCcsIHJvdykuZXEoMCkuYXBwZW5kKHNwYW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIExvZ091dCgpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvTG9naW4vTG9nb2ZmJztcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
