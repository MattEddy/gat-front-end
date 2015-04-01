import Ember from "ember";
import EmberValidations from 'ember-validations';

var DataController = {
  actions: {
    save: function() {
      this.validate()
    }
  },
  jsonString: function() {
    return JSON.stringify(this.model.get('example_data'));
  }.property('model.example_data'),
  validations: {
    jsonString: {
      json: { message: "invalid json"}
    }
  }
};

export default Ember.Controller.extend(EmberValidations.Mixin, DataController);
