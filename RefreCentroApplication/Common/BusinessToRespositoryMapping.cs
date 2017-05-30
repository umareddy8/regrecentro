using Angular2RFC.RFC.Business.BusinessModels;
using Angular2RFC.RFC.Repository.DataEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2RFC.Common
{
    public static class BusinessToRespositoryMapping
    {
        public static CustomerLoginEntity Map(this CustomerLogin userdetails)
        {
            CustomerLoginEntity user = new CustomerLoginEntity();
            user.Address1 = userdetails.Address1;
            user.Address2 = userdetails.Address2;
            user.Address3 = userdetails.Address3;
            user.City = userdetails.City;
            user.ContactPerson = userdetails.ContactPerson;
            user.Country = userdetails.Country;
            user.CustomerName = userdetails.CustomerName;
            user.CustomerNumber = userdetails.CustomerNumber;

            user.Email = userdetails.Email;
            user.IsUserFirstPasswordChanged = userdetails.IsUserFirstPasswordChanged;
            user.Password = userdetails.Password;
            user.Phone1 = userdetails.Phone1;
            user.Phone2 = userdetails.Phone2;
            user.Phone3 = userdetails.Phone3;
            user.ShipToName = userdetails.ShipToName;
            user.State = userdetails.State;


            return user;

        }
    }
}