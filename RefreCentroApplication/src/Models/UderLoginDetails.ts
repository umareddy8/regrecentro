export class UserLoginDetails {
    CustomerNumber: string;
    Password: string;
    CustomerName: string;
    ContactPerson: string;
    ShipToName: string;
    Email: string;
    Phone1: string;
    Phone2: string;
    Phone3: string;
    Address1: string;
    Address2: string;
    Address3: string;
    Country: string;
    State: string;
    City: string;
    IsUserFirstPasswordChanged: Boolean;
}


export class TransactionSearchDetails {

    AccountNumber: string;
    Amount: number;
    CashierName: string;
    CashierNumber: string;
    ClassID: string;
    Company: string;
    CustomerName: string;
    CustomerNumber: string;
    DocumentDate: Date;
    Name: string;
    ReferenceNumber: string;
    SOPNumber: string;
    SOPType: string;
    StoreCode: string;
    StoreID: string;
    TaxID0: number
    TaxID1: number
    TaxID2: number
    TaxID4: number
    TaxID5: number
    TransactionNumber:string

    //Customer_ID: string;
    //Customer_Name: string;
    //Short_Name: string;
    //Document_Date: Date;
    //CHEKNMBR: string;
    //GL_Posting_Date: Date;
    //RM_Doc_Type: string;
    //Payment_Batch: string;
    //Document_Type_and_Number: string;
    //Document_Number: string;
    //Original_Trx_Amount: Float64Array;
    //Current_Trx_Amount: Float64Array;
    //Total_Applied_Amount: Float64Array;
    //Amount_Applied: Float64Array;
    //Applied_to_Doc_Type: string;
    //Applied_to_Doc_Type_Name: string;
    //Applied_to_Doc_Number: string;
    //Applied_to_Document_Date: Date;
    //Applied_to_GL_Posting_Date: Date;
    //Discount: string;
    //Writeoff: string;
    //Apply_Document_Date: Date;
    //Apply_GL_Posting_Date: Date;
    //Applied_To_Doc_Total: string;
    //Applied_To_Date_Paid_Off: string;
    //Applied_To_Doc_Unapplied_Amount: string;
    //Customer_PO_Number: string;




}

export class CustomerPaymentDetails {
    Customer_ID: string;
    Customer_Name: string;
    Short_Name: string;
    Document_Date: Date;
    CHEKNMBR: string;
    GL_Posting_Date: Date;
    RM_Doc_Type: string;
    Payment_Batch: string;
    Document_Type_and_Number: string;
    Document_Number: string;
    Original_Trx_Amount: Float64Array;
    Current_Trx_Amount: Float64Array;
    Total_Applied_Amount: Float64Array;
    Amount_Applied: Float64Array;
    Applied_to_Doc_Type: string;
    Applied_to_Doc_Type_Name: string;
    Applied_to_Doc_Number: string;
    Applied_to_Document_Date: Date;
    Applied_to_GL_Posting_Date: Date;
    Discount: string;
    Writeoff: string;
    Apply_Document_Date: Date;
    Apply_GL_Posting_Date: Date;
    Applied_To_Doc_Total: string;
    Applied_To_Date_Paid_Off: string;
    Applied_To_Doc_Unapplied_Amount: string;
    Customer_PO_Number: string;
}
