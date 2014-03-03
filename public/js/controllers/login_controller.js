
App.LoginController = Ember.Controller.extend
({  
  actions: 
  {
    login: function() 
    {
      var email      = this.get('email');
      var password   = this.get('password');
      var controller = this;
      $.getJSON(apiUrl + "/users").then(function(users)
      {
        var entry = _.find(users, function(user)
        {
          return user.email == email 
        });
        if (entry == null || entry.password != password)
        {
          controller.transitionToRoute("start")
        }
        else
        {
          localStorage['currentUser'] = entry.id;
          App.set('currentUser', entry.id);
          controller.transitionToRoute("dashboard")
        }
      });
    }
  }
});
      
/*       
var users = this.store.all('user');
var matchingUser = users.find(function(user) 
{
  if (user.get('email') == email && user.get('password') == password)
  { 
    return true; 
  }
});
if (matchingUser)
{
  localStorage['currentUser'] = matchingUser.get('id');
  App.set('currentUser', matchingUser.get('id'));
  this.transitionToRoute("dashboard");  
}
else
{
  this.transitionToRoute("start")          
}
*/  
