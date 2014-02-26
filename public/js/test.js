
App = Ember.Application.create();
App.ApplicationController = Ember.Controller.extend({
    save: function(){
      alert(this.get("firstname"));
    }
});