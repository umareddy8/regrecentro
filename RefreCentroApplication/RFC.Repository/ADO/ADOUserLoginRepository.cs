using Angular2RFC.RFC.Repository.DataEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using Angular2RFC.Common;

namespace Angular2RFC.RFC.Repository.ADO
{
    using Angular2RFC.RFC.Repository.DataEntities;
    using System.Configuration;
    using System.Data.SqlClient;

    public class UserLoginDL
    {
        public CustomerLoginEntity ValidateUser(CustomerLoginEntity userLoginDetails, out bool isFirstLogin)
        {
            bool isValid = false;
            isFirstLogin = false;
            CustomerLoginEntity validUser = new CustomerLoginEntity();

            using (SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["RefriCentroDb"].ConnectionString))
            {
                string command = "SELECT top 1 * FROM CustomerLogin WHERE CUSTNMBR= '" + userLoginDetails.CustomerNumber + "' and Password_web = '" + userLoginDetails.Password + "'";

                try
                {
                    con.Open();
                    SqlCommand sqlCommand = new SqlCommand(command, con);
                    SqlDataReader reader = sqlCommand.ExecuteReader();
                    if (reader.HasRows)
                    {
                        isValid = true;
                        while (reader.Read())
                        {
                            reader.Map(out validUser);
                            if (!validUser.IsUserFirstPasswordChanged)
                            {
                                isFirstLogin = true;
                            }
                        }
                    }
                }

                catch (Exception e)
                {


                }
            }
            //using (LoginEntities entity = new LoginEntities())
            //{
            //    validUser = entity.Users.FirstOrDefault(x => x.AccountNumber == userLoginDetails.AccountNumber && x.Password == userLoginDetails.Password && x.IsActive == true);
            //    if (validUser != null)
            //    {
            //        isValid = true;
            //        if (!validUser.IsUserFirstPasswordChanged)
            //        {
            //            isFirstLogin = true;
            //        }
            //    }
            //}
            return validUser == null ? new CustomerLoginEntity() : validUser;

        }

        internal bool ChangePassword(CustomerLoginEntity user)
        {

            using (SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["RefriCentroDb"].ConnectionString))
            {
                string command = "UPDATE CustomerLogin SET Password_web= '" + user.Password + "',IsUserFirstPasswordChanged='true'  WHERE CUSTNMBR= '" + user.CustomerNumber + "'";

                try
                {
                    con.Open();
                    SqlCommand sqlCommand = new SqlCommand(command, con);
                    sqlCommand.ExecuteNonQuery();
                }
                catch (Exception e)
                {

                }
            }
            

            return false;

        }
    }
}