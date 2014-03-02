
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
  this.resource('upload',    { path: 'upload/:id' }); 
  this.resource('dashboard', { path: 'dashboard/:id' });
  this.resource('combo',     { path: 'combo/:id' });
});
