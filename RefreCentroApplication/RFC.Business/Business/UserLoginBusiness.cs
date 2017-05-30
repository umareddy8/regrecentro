using Angular2RFC.RFC.Business.BusinessModels;
using Angular2RFC.RFC.Repository.ADO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Angular2RFC.Common;
using Angular2RFC.RFC.Repository.DataEntities;

namespace Angular2RFC.RFC.Business.Business
{
    public class UserLoginBusiness
    {
        private CustomerLogin userAccountDetails=new CustomerLogin();
        public UserLoginBusiness(CustomerLogin userLoginDetails )
        {
            userAccountDetails = userLoginDetails;
        }
        public CustomerLogin ValidateUser(out bool isFirstLogin)
        {
            UserLoginDL validate = new UserLoginDL();
            return (validate.ValidateUser(userAccountDetails, out isFirstLogin)).Map();
        }

        public bool ChangePassword(CustomerLogin user)
        {
            UserLoginDL userPasswordDetails = new UserLoginDL();
            return userPasswordDetails.ChangePassword(user);
        }
    }
}