import Ember from 'ember';

export default Ember.Object.extend({
  init: function(){ return "cats"; },
  compile: function(markup, example_data) {
    var compiledTemplate;
    try {
      compiledTemplate = Handlebars.compile("<div>" + markup + "</div>");
      return compiledTemplate(example_data);
    } catch(e) {
      return false;
    }
  }
});
