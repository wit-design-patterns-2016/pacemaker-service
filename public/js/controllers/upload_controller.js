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
