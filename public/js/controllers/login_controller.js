
App.LoginController = Ember.Controller.extend
({  
  actions: 
  {
    login: function() 
    {
      var email    = this.get('email');
      var password = this.get('password');
      var controller = this;
      $.getJSON(apiUrl + "/users").then(function(users)
      {
        var entry = _.find(users, function(obj) { return obj.email == email })
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