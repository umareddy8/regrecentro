using Angular2RFC.RFC.Business.Business;
using Angular2RFC.RFC.Business.BusinessModels;
using Angular2RFC.Common;
using Angular2RFC.RFC.Repository.DataEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace Angular2RFC.Controllers
{
    public class LoginController : Controller
    {
        
        [Authorize]
        [Route("Login/ChangePassword")]
        public string ChangePassword(CustomerLogin userPasswordDetails)
        {
            CustomerLogin user = new CustomerLogin() { Password = userPasswordDetails.Password, CustomerNumber =userPasswordDetails.CustomerNumber };
            UserLoginBusiness userPasswordDetials = new UserLoginBusiness(user);
            userPasswordDetials.ChangePassword(user);
            return "1";
        }


        [Authorize]
        public ActionResult LogOff()
        {
            //AuthenticationManager.SignOut(DefaultAuthenticationTypes.ApplicationCookie);
            FormsAuthentication.SignOut();
            return RedirectToAction("Login", "Login");
        }




        // GET: /Login/  
        public ActionResult Login()
        {
            return View();
        }


        [HttpPost]
        public JsonResult Login(CustomerLogin loginDetails)
        {

            bool isFirstLogin = false;

            //UserLoginDetails loginDetails = new UserLoginDetails();
            //loginDetails.AccountNumber = accountNumber;
            //loginDetails.Password = password;


            CustomerLogin userDetails = new CustomerLogin() { CustomerNumber = loginDetails.CustomerNumber, Password = loginDetails.Password };
            UserLoginBusiness userValidation = new UserLoginBusiness(loginDetails);

            userDetails = userValidation.ValidateUser(out isFirstLogin);

            if (userDetails.CustomerNumber != null)
            {
                FormsAuthentication.SetAuthCookie(userDetails.CustomerNumber, true);

                var authTicket = new FormsAuthenticationTicket(1, userDetails.CustomerNumber, DateTime.Now, DateTime.Now.AddMinutes(20), false, "");
                string encryptedTicket = FormsAuthentication.Encrypt(authTicket);
                var authCookie = new HttpCookie(FormsAuthentication.FormsCookieName, encryptedTicket);
                HttpContext.Response.Cookies.Add(authCookie);

                if (isFirstLogin)
                {

                    return Json(1);
                }

                else
                {
                    return Json(0);
                }
            }
            else
            {
                return Json(-1);
            }
        }

    }


}