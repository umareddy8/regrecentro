using Angular2RFC.RFC.Business.BusinessModels;
using Angular2RFC.RFC.Repository.DataEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2RFC.Common
{
    public static class RepositoryToBisinessMapping
    {

        public static CustomerLogin Map(this CustomerLoginEntity user)
        {
            CustomerLogin userDetails = new CustomerLogin();
            userDetails.Address1 = user.Address1;
            userDetails.Address2 = user.Address2;
            userDetails.Address3 = user.Address3;
            userDetails.City = user.City;
            userDetails.ContactPerson = user.ContactPerson;
            userDetails.Country = user.Country;
            userDetails.CustomerName = user.CustomerName;
            userDetails.CustomerNumber = user.CustomerNumber;
            userDetails.Email = user.Email;
            userDetails.IsUserFirstPasswordChanged = user.IsUserFirstPasswordChanged;
            userDetails.Password = user.Password;
            userDetails.Phone1 = user.Phone1;
            userDetails.Phone2 = user.Phone2;
            userDetails.Phone3 = user.Phone3;
            userDetails.ShipToName = user.ShipToName;
            userDetails.State = user.State;

            return userDetails;

        }

        public static  List<CustomerPaymentDetails> Map(this List<CustomerPaymentsEntity> customerPaymentEntityList)
        {
            List<CustomerPaymentDetails> customerPaymentList = new List<CustomerPaymentDetails>();

            foreach (CustomerPaymentsEntity payment in customerPaymentEntityList)
            {
                CustomerPaymentDetails customerPayment = new CustomerPaymentDetails();
                customerPayment.Amount_Applied = payment.Amount_Applied;
                customerPayment.Applied_To_Date_Paid_Off = payment.Applied_To_Date_Paid_Off;
                customerPayment.Applied_to_Doc_Number = payment.Applied_to_Doc_Number;
                customerPayment.Applied_To_Doc_Total = payment.Applied_To_Doc_Total;
                customerPayment.Applied_to_Doc_Type = payment.Applied_to_Doc_Type;
                customerPayment.Applied_to_Doc_Type_Name = payment.Applied_to_Doc_Type_Name;
                customerPayment.Applied_To_Doc_Unapplied_Amount = payment.Applied_To_Doc_Unapplied_Amount;
                customerPayment.Applied_to_Document_Date = payment.Applied_to_Document_Date;
                customerPayment.Applied_to_GL_Posting_Date = payment.Applied_to_GL_Posting_Date;
                customerPayment.Apply_Document_Date = payment.Apply_Document_Date;
                customerPayment.Apply_GL_Posting_Date = payment.Apply_GL_Posting_Date;
                customerPayment.CHEKNMBR = payment.CHEKNMBR;
                customerPayment.Current_Trx_Amount = payment.Current_Trx_Amount;
                customerPayment.Customer_ID = payment.Customer_ID;
                customerPayment.Customer_Name = payment.Customer_Name;
                customerPayment.Customer_PO_Number = payment.Customer_PO_Number;
                customerPayment.Discount = payment.Discount;
                customerPayment.Document_Date = payment.Document_Date;
                customerPayment.Document_Number = payment.Document_Number;
                customerPayment.Document_Type_and_Number = payment.Document_Type_and_Number;
                customerPayment.GL_Posting_Date = payment.GL_Posting_Date;
                customerPayment.Original_Trx_Amount = payment.Original_Trx_Amount;
                customerPayment.Payment_Batch = payment.Payment_Batch;
                customerPayment.RM_Doc_Type = payment.RM_Doc_Type;
                customerPayment.Short_Name = payment.Short_Name;
                customerPayment.Total_Applied_Amount = payment.Total_Applied_Amount;
                customerPayment.Writeoff = payment.Writeoff;
                customerPaymentList.Add(customerPayment);
            }
            return customerPaymentList;
        }


        public static List<TransactionSearchDetails> Map(this List<TransactionSearchEntity> transactionSearchEntity)
        {
            List<TransactionSearchDetails> transactionSearchList = new List<TransactionSearchDetails>();

            foreach (TransactionSearchEntity transaction in transactionSearchEntity)
            {
                TransactionSearchDetails transactionSearch = new TransactionSearchDetails();
                transactionSearch.AccountNumber = transaction.AccountNumber;
                transactionSearch.Amount = transaction.Amount;
                transactionSearch.CashierName = transaction.CashierName;
                transactionSearch.CashierNumber = transaction.CashierNumber;
                transactionSearch.ClassID = transaction.ClassID;
                transactionSearch.Company = transaction.Company;
                transactionSearch.CustomerName = transaction.CustomerName;
                transactionSearch.CustomerNumber = transaction.CustomerNumber;
                transactionSearch.DocumentDate = transaction.DocumentDate;
                transactionSearch.Name = transaction.Name;
                transactionSearch.ReferenceNumber = transaction.ReferenceNumber;
                transactionSearch.SOPNumber = transaction.SOPNumber;
                transactionSearch.SOPType = transaction.SOPType;
                transactionSearch.StoreCode = transaction.StoreCode;
                transactionSearch.StoreID = transaction.StoreID;
                transactionSearch.TaxID0 = transaction.TaxID0;
                transactionSearch.TaxID1 = transaction.TaxID1;
                transactionSearch.TaxID2 = transaction.TaxID2;
                transactionSearch.TaxID4 = transaction.TaxID4;
                transactionSearch.TaxID5 = transaction.TaxID5;
                transactionSearch.TransactionNumber = transaction.TransactionNumber;
                transactionSearchList.Add(transactionSearch);
            }
            return transactionSearchList;
        }
    }
}