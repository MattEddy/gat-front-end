import Ember from "ember";
import EmberValidations from 'ember-validations';

var DataController = {
  actions: {
    save: function() {
      if (!this.hasError) {
        this.get('content').save().then(function() {
          console.log("success");
        },function() {
          console.log("failure");
        });
      }
    },
    validateJson: function() {
      console.log(this.get('isValid'))
      console.log(this.get('errors'))
    }
  },
  validations: {
    example_data: {
      json: { message: "not valid"}
    }
  }
};

export default Ember.ObjectController.extend(EmberValidations.Mixin, DataController);
