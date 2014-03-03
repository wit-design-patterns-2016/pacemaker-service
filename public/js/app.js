
var apiUrl = '/api'  
  
App = Ember.Application.create(
{
  currentUser: localStorage['currentUser']  
});

App.Router.map(function()
{
  this.resource('start');
  this.resource('signup');
  this.resource('login'); 
  this.resource('dashboard');
});

/*
Ember.Inflector.inflector.irregular('activity', 'activities');
App.ApplicationAdapter = DS.RESTAdapter.extend(
{
  host      : 'http://localhost:9000',
  namespace : 'api'
});
*/