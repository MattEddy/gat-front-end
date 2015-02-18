import Ember from "ember";

var DataController = {
  parseJson: function(arg) {
    try {
      JSON.parse(arg);
    } catch(e){
      return false;
    }
    return true;
  },
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
      if (this.parseJson(this.get('model.example_data_string'))) {
        this.set('hasError', false);
        this.set('errorMessages.jsonError', "");
      }
      else {
        this.set('hasError', true);
        this.set('errorMessages.jsonError', "You have entered invalid JSON, please reformat your JSON.");
      }
    }
  },
  hasError: false,
  errorMessages: {
    jsonError: ""
  }
};

export default Ember.ObjectController.extend(DataController);
