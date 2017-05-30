using Angular2RFC.RFC.Repository.DataEntities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Angular2RFC.Common
{
    public static class ReaderToObjectMapping
    {
        public static CustomerLoginEntity Map(this IDataReader reader,out CustomerLoginEntity userEntity)
        {
            userEntity = new CustomerLoginEntity();
            userEntity.CustomerNumber = reader["CUSTNMBR"].ToString();
            userEntity.CustomerName = reader["Custname"].ToString();
            userEntity.ContactPerson = reader["CntcPrsn"].ToString();
            userEntity.ShipToName = reader["ShipToName"].ToString();
            userEntity.Password = reader["Password_web"].ToString();
            userEntity.IsUserFirstPasswordChanged = Convert.ToBoolean(reader["IsUserFirstPasswordChanged"]);
            userEntity.Phone1 = Convert.ToString(reader["Phone1"]);
            userEntity.Phone2 = Convert.ToString(reader["Phone2"]);
            userEntity.Phone3 = Convert.ToString(reader["Phone3"]);
            userEntity.Address1 = Convert.ToString(reader["Address1"]);
            userEntity.Address2 = Convert.ToString(reader["Address2"]);
            userEntity.Address3 = Convert.ToString(reader["Address3"]);
            userEntity.Country = Convert.ToString(reader["country"]);
            userEntity.State = Convert.ToString(reader["State"]);
            userEntity.City = Convert.ToString(reader["city"]);
            userEntity.Email = Convert.ToString(reader["Email"]);
            return userEntity;
        }
        public static CustomerPaymentsEntity Map(this IDataReader reader,out CustomerPaymentsEntity paymentEntity)
        {
            paymentEntity = new CustomerPaymentsEntity();
            paymentEntity.Amount_Applied =Convert.ToDouble( reader["Amount_Applied"]);
            paymentEntity.Applied_To_Date_Paid_Off = reader["Applied_To_Date_Paid_Off"].ToString();
            paymentEntity.Applied_to_Doc_Number = Convert.ToString(reader["Applied_to_Doc_Number"]);
            paymentEntity.Applied_To_Doc_Total = Convert.ToString(reader["Applied_To_Doc_Total"]);
            paymentEntity.Applied_to_Doc_Type = Convert.ToString(reader["Applied_to_Doc_Type"]);
            paymentEntity.Applied_to_Doc_Type_Name = Convert.ToString(reader["Applied_to_Doc_Type_Name"]);
            paymentEntity.Applied_To_Doc_Unapplied_Amount = Convert.ToString(reader["Applied_To_Doc_Unapplied_Amount"]);
            paymentEntity.Applied_to_Document_Date = Convert.ToDateTime(reader["Applied_to_Document_Date"]);
            paymentEntity.Applied_to_GL_Posting_Date =Convert.ToDateTime(reader["Applied_to_GL_Posting_Date"]);
            paymentEntity.Apply_Document_Date = Convert.ToDateTime( reader["Apply_Document_Date"]);
            paymentEntity.Apply_GL_Posting_Date = Convert.ToDateTime(reader["Apply_GL_Posting_Date"]);
            paymentEntity.CHEKNMBR = Convert.ToString(reader["CHEKNMBR"]);
            paymentEntity.Current_Trx_Amount = Convert.ToDouble(reader["Current_Trx_Amount"]);
            paymentEntity.Customer_ID = Convert.ToString(reader["Customer_ID"]);
            paymentEntity.Customer_Name = Convert.ToString(reader["Customer_Name"]);
            paymentEntity.Customer_PO_Number = Convert.ToString(reader["Customer_PO_Number"]);
            paymentEntity.Discount = reader["Discount"].ToString();
            paymentEntity.Document_Date = Convert.ToDateTime( reader["Document_Date"]);
            paymentEntity.Document_Number = Convert.ToString(reader["Document_Number"]);
            paymentEntity.Document_Type_and_Number = Convert.ToString(reader["Document_Type_and_Number"]);
            paymentEntity.GL_Posting_Date = Convert.ToDateTime(reader["GL_Posting_Date"]);
            paymentEntity.Original_Trx_Amount = Convert.ToDouble(reader["Original_Trx_Amount"]);
            paymentEntity.Payment_Batch = Convert.ToString(reader["Payment_Batch"]);
            paymentEntity.RM_Doc_Type = Convert.ToString(reader["RM_Doc_Type"]);
            paymentEntity.Short_Name = reader["Short_Name"].ToString();
            paymentEntity.Total_Applied_Amount =Convert.ToDouble(reader["Total_Applied_Amount"]);
            paymentEntity.Writeoff = Convert.ToString(reader["Writeoff"]);
           

            return paymentEntity;
        }

        public static TransactionSearchEntity Map(this IDataReader reader, out TransactionSearchEntity transactionEntity)
        {
            transactionEntity = new TransactionSearchEntity();
            transactionEntity.AccountNumber = Convert.ToString(reader["AccountNumber"]);
            transactionEntity.Amount = Convert.ToDecimal(reader["Amount"]);
            transactionEntity.CashierName = Convert.ToString(reader["CashierName"]);
            transactionEntity.CashierNumber = Convert.ToString(reader["CashierNumber"]);
            transactionEntity.ClassID = Convert.ToString(reader["ClassID"]);
            transactionEntity.Company = Convert.ToString(reader["Company"]);
            transactionEntity.CustomerName = Convert.ToString(reader["CustomerName"]);
            transactionEntity.CustomerNumber = Convert.ToString(reader["CustomerNumber"]);
            transactionEntity.DocumentDate = Convert.ToDateTime(reader["DocumentDate"]);
            transactionEntity.Name = Convert.ToString(reader["Name"]);
            transactionEntity.ReferenceNumber = Convert.ToString(reader["ReferenceNumber"]);
            transactionEntity.SOPNumber = Convert.ToString(reader["SOPNumber"]);
            transactionEntity.SOPType = Convert.ToString(reader["SOPType"]);
            transactionEntity.StoreCode = Convert.ToString(reader["StoreCode"]);
            transactionEntity.StoreID = Convert.ToString(reader["StoreID"]);
            transactionEntity.TaxID0 = Convert.ToDecimal(reader["TaxID0"]);
            transactionEntity.TaxID1 =Convert.ToDecimal(reader["TaxID1"]);
            transactionEntity.TaxID2 = Convert.ToDecimal(reader["TaxID2"]);
            transactionEntity.TaxID4 = Convert.ToDecimal(reader["TaxID4"]);
            transactionEntity.TaxID5 = Convert.ToDecimal(reader["TaxID5"]);
            transactionEntity.TransactionNumber = Convert.ToString(reader["TransactionNumber"]);
            

            return transactionEntity;
        }

    }
}