
var apiUrl = '/api'  
  
App = Ember.Application.create(
{
  currentUser: localStorage['currentUser']  
});

App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter
});

App.Router.map(function()
{
  this.resource('start');
  this.resource('signup');
  this.resource('login'); 
  this.resource('dashboard');
});
