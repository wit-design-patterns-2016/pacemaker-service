
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