App.ApplicationController = Ember.Controller.extend(
{
  signedInUser: function() 
  {
    return this.store.find('user', localStorage['currentUser']);
  },

  userSignedIn: function() 
  {
    return localStorage['currentUser'] != null;
  },

  actions: 
  {
    signOut: function() 
    {
      delete localStorage['currentUser'];
      App.set('currentUser', undefined);
    }
  }
});