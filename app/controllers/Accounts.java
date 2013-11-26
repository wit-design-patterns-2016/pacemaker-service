package controllers;

import static play.data.Form.form;

import org.h2.engine.Session;

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
    return ok(start.render());
  }

  public static Result signup()
  {
    return ok(signup.render(userForm));
  }
  
  public static Result login()
  {
    return ok(login.render(loginForm));
  }
  
  public static Result logout()
  {
    session().clear();
    return ok(start.render());
  }

  public static Result register()
  {
    Form<User> boundForm = userForm.bindFromRequest();
    if(loginForm.hasErrors()) 
    {
      return badRequest(login.render(loginForm));
    }
    else
    {
      User user = boundForm.get();
      Logger.info ("User = " + user.toString());
      user.save();
      return ok(start.render());
    }
  }

  public static Result authenticate() 
  {
    Form<User> boundForm = loginForm.bindFromRequest();
    if(loginForm.hasErrors()) 
    {
      return badRequest(login.render(loginForm));
    } 
    else 
    {
       session("email", boundForm.get().email);
      // return redirect(routes.Home.index());
       return redirect(routes.Dashboard.index());
    }
  }
}
