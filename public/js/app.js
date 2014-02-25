var user = 
{
  firstname : "",
  lastname  : "",
  email     : "",
  password  : ""
};

App = Ember.Application.create({});

App.Router.map(function()
{
  this.resource('start');
  this.resource('signup');
  this.resource('login'); 
  this.resource('dashboard',  { path: ':id' });
});

App.StartRoute = Ember.Route.extend
({
});

App.StartView = Ember.View.extend
({
  templateName : 'start'
});

App.SignupRoute = Ember.Route.extend
({
  model: function() 
         {
		       console.log ("Signup Model Requested");
		       return user;
	       }
});

App.SignupView = Ember.View.extend
({
  templateName : 'signup'
});

App.SignupController = Ember.ObjectController.extend
({
  actions: 
  {
    signup: function() 
            {
              var user = this.get('model')
              console.log (JSON.stringify(user));
              this.transitionToRoute("start")
  	        }
  }
});

App.LoginRoute = Ember.Route.extend
({
	model: function() 
	       {
	         return user;
	       }
});

App.LoginView = Ember.View.extend
({
  templateName : 'login'
});

App.LoginController = Ember.ObjectController.extend
({	
  actions: 
  {
	   login: function() 
	   {
       var user = this.get('model')
       var controller = this;
       $.getJSON("http://localhost:9000/api/users").then(function(users)
       {
         var entry = _.find(users, function(obj) { return obj.email == user.email })
         if (entry.password == user.password)
         {
           controller.transitionToRoute("dashboard", entry.id)
         }
       });
	     this.transitionToRoute("start")
     }
   }
});

App.DashboardRoute = Ember.Route.extend
({
  model: function(params) {
    var user = App.loggedInUser;
    return $.getJSON("http://localhost:9000/api/users/" + params.id + "/activities").then(function(activities){
      return activities;
    });
  }
});


App.DashboardView = Ember.View.extend
({
  templateName : 'dashboard'
});

App.DashboardController = Ember.ObjectController.extend
({  
  actions: 
  {
  }
});

