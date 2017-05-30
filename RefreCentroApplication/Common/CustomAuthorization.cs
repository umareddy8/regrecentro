using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
//using System.Web.Http.Controllers;
using Angular2RFC.RFC.Repository.DataEntities;

namespace Angular2RFC.Common
{
    public class CustomAuthorizeAttribute : AuthorizeAttribute
    {

        //LoginEntities context = new LoginEntities(); // my entity  

        private readonly string[] allowedroles;

        public CustomAuthorizeAttribute(params string[] roles)
        {
            this.allowedroles = roles;
        }

        protected override bool AuthorizeCore(HttpContextBase httpContext)
            {
            bool authorize = false;
           
            string a = HttpContext.Current.User.Identity.Name;
            var user = "";
            //context.Users.Where(m => m.AccountNumber == "" && m.Password == "" && m.IsActive == true); // checking active users with allowed roles.  
                if (user!= null)
                {
                    authorize = true; /* return true if Entity has current user(active) with specific role */
                }
                return authorize;
        }
        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            filterContext.Result = new HttpUnauthorizedResult();
        }
    }
}