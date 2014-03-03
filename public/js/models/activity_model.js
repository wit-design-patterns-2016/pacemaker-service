


App.Activity = DS.Model.extend(
{
  kind     : DS.attr('string'),
  location : DS.attr('string'),
 // distance : DS.attr('number'),
  user     : DS.belongsTo('user')
});
