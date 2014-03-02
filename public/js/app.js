var user = 
{
  firstname : "",
  lastname  : "",
  email     : "",
  password  : ""
};

var activity = 
{
  kind: "",
  distance  : "",
  location    : "",
};

var apiUrl = '/api'  
  
App = Ember.Application.create({});

App.Router.map(function()
{
  this.resource('start');
  this.resource('signup');
  this.resource('login'); 
  this.resource('upload',    { path: 'upload/:id' }); 
  this.resource('dashboard', { path: 'dashboard/:id' });
  this.resource('combo',     { path: 'combo/:id' });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
      this.transitionTo('start');
  }
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
      $.getJSON(apiUrl + "/users").then(function(users)
      {
        var entry = _.find(users, function(obj) { return obj.email == user.email })
        if (entry.password == user.password)
        {
          controller.transitionToRoute("dashboard", entry.id)
        }
        else
        {
          this.transitionToRoute("start")
        }
      });
    }
  }
});

App.DashboardRoute = Ember.Route.extend
({
  model: function(params) 
         { 
           return $.getJSON(apiUrl + "/users/" + params.id).then(function(userDetails)
           {
            return userDetails
           });
         }
});

App.DashboardView = Ember.View.extend
({
  templateName : 'dashboard'
});

App.DashboardController = Ember.ObjectController.extend
({  

});

App.UploadRoute = Ember.Route.extend
({
  model: function(params) 
         { 
           return $.getJSON(apiUrl + "/users" + params.id).then(function(userDetails)
           {
            return userDetails
           });
         }
});

App.UploadView = Ember.View.extend
({
  templateName : 'upload'
});

App.UploadController = Ember.ObjectController.extend
({  
  actions: 
  {
    upload: function(params) 
    {
      var controller = this;
      var model = this.get("model");
      var activity = {};
      activity.kind     = model.kind;
      activity.location = model.location;
      activity.distance = model.distance;
      apiPost(apiUrl + "/users/" + params.id + "/activities", activity, function done(data)
      {
        console.log ( "activity loaded: " + JSON.stringify(data) );
        controller.transitionToRoute("dashboard", model.id)
      });
    }
  }
});


App.ComboRoute = Ember.Route.extend
({
  model: function(params) 
         { 
           return $.getJSON(apiUrl + "/users/" + params.id).then(function(userDetails)
           {
            return userDetails
           });
         }
});

App.ComboView = Ember.View.extend
({
  templateName : 'combo'
});

App.ComboController = Ember.ObjectController.extend
({  
  actions: 
  {
    upload: function(params) 
    {
      var controller = this;
      var model = this.get("model");
      var activity = {};
      activity.kind     = model.kind;
      activity.location = model.location;
      activity.distance = model.distance;
      apiPost(apiUrl + "/users/" + params.id + "/activities", activity, function done(data)
      {
        console.log ( "activity loaded: " + JSON.stringify(data) );
        model.activities.pushObject(activity);
      });
    },

    clear: function(params)  
    {  
      apiDelete(apiUrl + "/users/" + params.id + "/activities")    
      var model = this.get("model");
      model.activities.clear();
    },
    
    remove: function(params)  
    { 
      var model = this.get("model");
      apiDelete(apiUrl + "/users/" + model.id + "/activities/" + params.id)      
      var entry = _.find(model.activities, function(obj) { return obj.id == params.id })
      model.activities.removeObject(entry);
    }   
    
  }
});


