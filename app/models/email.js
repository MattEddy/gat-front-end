import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  markup: attr('string'),
  example_data: attr('json')
});
