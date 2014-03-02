
App.DashboardRoute = Ember.Route.extend
({
  model: function(params) 
  { 
    userid = localStorage['currentUser'] 
    return $.getJSON(apiUrl + "/users/" + userid).then(function(userDetails)
    {
     return userDetails
    });
  }
});