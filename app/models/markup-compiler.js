import Ember from 'ember';

export default Ember.Object.extend({
  init: function(){ return "cats"; },
  compile: function(markup, example_data) {
    var compiledTemplate = Handlebars.compile("<div>" + markup + "</div>");
    console.log(example_data);
    console.log(markup)
    return compiledTemplate(example_data);
  }
});
