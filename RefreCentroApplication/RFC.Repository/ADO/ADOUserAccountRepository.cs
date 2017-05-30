using Angular2RFC.RFC.Business.BusinessModels;
using Angular2RFC.RFC.Repository.DataEntities;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using Angular2RFC.Common;
namespace Angular2RFC.RFC.Repository.ADO
{
    public class ADOUserAccountRepository
    {

        internal List<CustomerPaymentsEntity> getPaymentData(CustomerLogin user)
        {
            List<CustomerPaymentsEntity> paymentDataList = new List<CustomerPaymentsEntity>();

            using (SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["RefriCentroDb"].ConnectionString))
            {
                string commandStr = "SELECT * FROM GP_CustomerPaymentHistory WHERE Customer_ID ='" + user.CustomerNumber + "'";
                try
                {
                    con.Open();
                    SqlCommand sqlCommand = new SqlCommand(commandStr, con);
                    SqlDataReader reader = sqlCommand.ExecuteReader();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            CustomerPaymentsEntity paymentData = new CustomerPaymentsEntity();
                            paymentDataList.Add(reader.Map(out paymentData));
                        }
                    }
                }
                catch(Exception e)
                { }
            }
            return paymentDataList;
        }

        internal List<TransactionSearchEntity> getTransactionData(CustomerLogin user)
        {
            List<TransactionSearchEntity> transactionDataList = new List<TransactionSearchEntity>();

            using (SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["RefriCentroDb"].ConnectionString))
            {
                string commandStr = "SELECT * FROM RMS_Transaction WHERE AccountNumber ='" + user.CustomerNumber + "'";
                try
                {
                    con.Open();
                    SqlCommand sqlCommand = new SqlCommand(commandStr, con);
                    SqlDataReader reader = sqlCommand.ExecuteReader();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            TransactionSearchEntity transactionData = new TransactionSearchEntity();
                            transactionDataList.Add(reader.Map(out transactionData));
                        }
                    }
                }
                catch (Exception e)
                { }
            }
            return transactionDataList;
        }

        public CustomerLoginEntity getPersonalInfo(CustomerLogin userLoginDetails)
        {
            CustomerLoginEntity userEntity = new CustomerLoginEntity();

            using (SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["RefriCentroDb"].ConnectionString))
            {
                string commandStr = "SELECT * FROM Users WHERE AccountNumber ='" + userLoginDetails.CustomerNumber + "'";
                try
                {
                    con.Open();
                    SqlCommand sqlCommand = new SqlCommand(commandStr, con);
                    SqlDataReader reader = sqlCommand.ExecuteReader();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            userEntity = (reader.Map(out userEntity));
                        }
                    }
                }
                catch (Exception e)
                { }
            }
            return userEntity;
        }
    }
}