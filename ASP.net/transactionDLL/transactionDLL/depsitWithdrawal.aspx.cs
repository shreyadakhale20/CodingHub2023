﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using bankLibrary;
namespace transactionDLL
{
    public partial class depsitWithdrawal : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        Class1 c = new Class1();
        protected void Button1_Click(object sender, EventArgs e)
        {
            Label1.Text = c.deposit(Convert.ToInt32(TextBox1.Text));
        }

        protected void Button2_Click(object sender, EventArgs e)
        {
            Label1.Text = c.withdrawal(Convert.ToInt32(TextBox1.Text));
        }
    }
}