using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular2RFC.RFC.Repository.DataEntities
{
    public class CustomerLoginEntity
    {
        
        public string CustomerNumber { get; set; }
        public string Password { get; set; }
        public string CustomerName { get; set; }
        public string ContactPerson { get; set; }
        public string ShipToName { get; set; }
        public string Email { get; set; }
        public string Phone1 { get; set; }
        public string Phone2 { get; set; }
        public string Phone3 { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string Address3 { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public bool IsUserFirstPasswordChanged { get; set; }

   
    }
}