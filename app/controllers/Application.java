package controllers;

import java.util.List;
import models.User;
import play.mvc.*;
import views.html.*;
import play.data.Form;

public class Application extends Controller
{
  private static final Form<User> userForm = Form.form(User.class);
  
  public static Result index()
  {
    List<User> users = User.findAll();
    return ok(index.render(users));
  }
  
  public static Result addUser()
  {
    return ok(adduser.render());
  }
  
  public static Result submitUser()
  {
    Form<User> boundForm = userForm.bindFromRequest();
    User user = boundForm.get();
    user.save();
    return redirect ("/");
  }
}
