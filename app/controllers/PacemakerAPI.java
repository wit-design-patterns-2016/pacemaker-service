package controllers;

import static parsers.JsonParser.*;
import play.mvc.*;

import java.util.*;

import models.*;

public class PacemakerAPI extends Controller
{  
  
  public static Result  users()
  {
    List<User> users = User.findAll();
    return ok(renderUser(users));
  }

  public static Result user(Long id)
  {
    User user = User.findById(id);  
    return user==null? notFound() : ok(renderUser(user)); 
  }
  
  public static Result createUser()
  {
    User user = renderUser(request().body().asJson().toString());
    user.save();
    return ok(renderUser(user));
  }
  
  public static Result deleteUser(Long id)
  {
    Result result = notFound();
    User user = User.findById(id);
    if (user != null)
    {
      user.delete();
      result = ok();
    }
    return result;
  }
  
  public static Result deleteAllUsers()
  {
    User.deleteAll();
    return ok();
  }
  
  public static Result updateUser(Long id)
  {
    Result result = notFound();
    User user = User.findById(id);
    if (user != null)
    {
      User updatedUser = renderUser(request().body().asJson().toString());
      user.update(updatedUser);
      user.save();
      result = ok(renderUser(user));
    }
    return result;
  }
}