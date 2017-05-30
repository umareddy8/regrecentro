using Angular2RFC.RFC.Business.BusinessModels;
using Angular2RFC.RFC.Repository.ADO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Angular2RFC.Common;

namespace Angular2RFC.RFC.Business.Business
{
    public class UserAccountBusiness : CustomerPaymentDetails
    {
        public List<CustomerPaymentDetails> getPaymentData(CustomerLogin user)
        {
            List<CustomerPaymentDetails> paymentData = new List<CustomerPaymentDetails>();
            ADOUserAccountRepository userAccount = new ADOUserAccountRepository();
            return userAccount.getPaymentData(user).Map();
        }

        public List<TransactionSearchDetails> getTransationData(CustomerLogin userLoginDetails)
        {
            List<TransactionSearchDetails> transactionData = new List<TransactionSearchDetails>();
            ADOUserAccountRepository userAccount = new ADOUserAccountRepository();
            return userAccount.getTransactionData(userLoginDetails).Map();
        }

        public CustomerLogin getPersonalInfo(CustomerLogin userLoginDetails)
        {
            ADOUserAccountRepository userAccount = new ADOUserAccountRepository();
            return userAccount.getPersonalInfo(userLoginDetails).Map();
        }
    }
}