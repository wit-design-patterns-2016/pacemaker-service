
App.DashboardController = Ember.ObjectController.extend
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
      
      userid = localStorage['currentUser'] 
      
      apiPost(apiUrl + "/users/" + userid + "/activities", activity, function done(data)
      {
        console.log ( "activity loaded: " + JSON.stringify(data) );
        model.activities.pushObject(data);
      });
    },

    clearall: function(params)  
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