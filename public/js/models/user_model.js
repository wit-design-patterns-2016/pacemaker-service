

App.User = DS.Model.extend(
{
  firstname  : DS.attr('string'),
  lastname   : DS.attr('string'),
  email      : DS.attr('string'),
  password   : DS.attr('string'),
  activities : DS.hasMany('activity')
});
