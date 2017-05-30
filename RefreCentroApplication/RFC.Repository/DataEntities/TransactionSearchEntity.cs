using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2RFC.RFC.Repository.DataEntities
{
    public class TransactionSearchEntity
    {
        public string StoreID { get; set; }
        public string Name { get; set; }
        public string AccountNumber { get; set; }
        public string CustomerName { get; set; }
        public string Company { get; set; }
        public string CashierNumber { get; set; }
        public string CashierName { get; set; }
        public string SOPType { get; set; }
        public string SOPNumber { get; set; }
        public DateTime DocumentDate { get; set; }
        public string CustomerNumber { get; set; }
        public decimal Amount { get; set; }
        public decimal TaxID0 { get; set; }
        public decimal TaxID1 { get; set; }
        public decimal TaxID2 { get; set; }
        public decimal TaxID4 { get; set; }
        public decimal TaxID5 { get; set; }
        public string ClassID { get; set; }
        public string ReferenceNumber { get; set; }
        public string TransactionNumber { get; set; }
        public string StoreCode { get; set; }
    }
}