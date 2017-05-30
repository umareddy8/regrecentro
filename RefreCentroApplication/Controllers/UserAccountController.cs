using Angular2RFC.RFC.Business.Business;
using Angular2RFC.RFC.Business.BusinessModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace Angular2RFC.Controllers
{
    [Authorize]
    public class UserAccountController : Controller
    {
        // GET: UserAccount
        public ActionResult UserAccount(CustomerLogin userLoginDetails)
        {
            return View();

        }
        [HttpGet]
        public JsonResult PaymentData(CustomerLogin userLoginDetails)
        {
            UserAccountBusiness userAccount = new UserAccountBusiness();
            return Json(userAccount.getPaymentData(userLoginDetails),JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult TransactionData(CustomerLogin userLoginDetails)
        {
            UserAccountBusiness userAccount = new UserAccountBusiness();
            return Json(userAccount.getTransationData(userLoginDetails),JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult PersonalInfo(CustomerLogin userLoginDetails)
        {
            UserAccountBusiness userAccount = new UserAccountBusiness();
            return Json(userAccount.getPersonalInfo(userLoginDetails),JsonRequestBehavior.AllowGet);
        }


    }
}