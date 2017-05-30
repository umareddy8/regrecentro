using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2RFC.RFC.Repository.DataEntities
{
    public class CustomerPaymentsEntity
    {
        public string Customer_ID { get; set; }
        public string Customer_Name { get; set; }
        public string Short_Name { get; set; }
        public DateTime Document_Date { get; set; }
        public string CHEKNMBR { get; set; }
        public DateTime GL_Posting_Date { get; set; }
        public string RM_Doc_Type { get; set; }
        public string Payment_Batch { get; set; }
        public string Document_Type_and_Number { get; set; }
        public string Document_Number { get; set; }
        public double Original_Trx_Amount { get; set; }
        public double Current_Trx_Amount { get; set; }
        public double Total_Applied_Amount { get; set; }
        public double Amount_Applied { get; set; }
        public string Applied_to_Doc_Type { get; set; }
        public string Applied_to_Doc_Type_Name { get; set; }
        public string Applied_to_Doc_Number { get; set; }
        public DateTime Applied_to_Document_Date { get; set; }
        public DateTime Applied_to_GL_Posting_Date { get; set; }
        public string Discount { get; set; }
        public string Writeoff { get; set; }
        public DateTime Apply_Document_Date { get; set; }
        public DateTime Apply_GL_Posting_Date { get; set; }
        public string Applied_To_Doc_Total { get; set; }
        public string Applied_To_Date_Paid_Off { get; set; }
        public string Applied_To_Doc_Unapplied_Amount { get; set; }
        public string Customer_PO_Number { get; set; }
    }
}