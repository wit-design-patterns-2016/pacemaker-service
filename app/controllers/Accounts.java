package controllers;

import models.User;
import play.*;
import play.mvc.*;

import views.html.*;
import play.data.Form;

public class Accounts extends Controller
{
  private static final Form<User> userForm = Form.form(User.class);
  private static final Form<User> loginForm = Form.form(User.class);
  
  public static Result index()
  {
    return ok(welcome_main.render());
  }

  public static Result signup()
  {
    return ok(accounts_signup.render());
  }
  
  public static Result login()
  {
    return ok(accounts_login.render());
  }
  
  public static Result logout()
  {
    session().clear();
    return ok(welcome_main.render());
  }

  public static Result register()
  {
    Form<User> boundForm = userForm.bindFromRequest();
    if(loginForm.hasErrors()) 
    {
      return badRequest(accounts_login.render());
    }
    else
    {
      User user = boundForm.get();
      Logger.info ("User = " + user.toString());
      user.save();
      return ok(welcome_main.render());
    }
  }

  public static Result authenticate() 
  {
    Form<User> boundForm = loginForm.bindFromRequest();
    if(loginForm.hasErrors()) 
    {
      return badRequest(accounts_login.render());
    } 
    else 
    {
       session("email", boundForm.get().email);
       return redirect(routes.Dashboard.index());
    }
  }
}
