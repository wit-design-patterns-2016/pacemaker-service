App.ApplicationController = Ember.Controller.extend(
{
  /*init: function() 
  {
    this._super();
    comsole.log('init called');
  },*/
  
  signedInUser: function() 
  {
    return this.store.find('user', localStorage['currentUser']);
  }.property('App.currentUser'),

  userSignedIn: function() 
  {
    return localStorage['currentUser'] != null;
  }.property('App.currentUser'),

  actions: 
  {
    signout: function() 
    {
      delete localStorage['currentUser'];
      App.set('currentUser', undefined);
      this.transitionToRoute("start");
    }
  }
});