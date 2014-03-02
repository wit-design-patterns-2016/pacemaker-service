
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