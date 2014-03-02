App.User = DS.Model.extend(
{
  firstname : DS.attr('string'),
  lastname  : DS.attr('string'),
  email     : DS.attr('string'),
  passwrod  : DS.attr('string'),
});