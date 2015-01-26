import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  example_data: attr(),
  date: attr('favorite_date')
});