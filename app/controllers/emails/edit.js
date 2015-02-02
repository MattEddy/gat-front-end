import Ember from "ember";

var EmailController = {
  parseJson: function(arg) {
    try {
      JSON.parse(arg);
    } catch(e){
      return false; //error in the above string(in this case,yes)!
    }
    return true;
  },
  actions: {
    save: function() {
      console.log("here")
      if (!this.hasError) {
        this.get('content').save().then(function() {
          console.log("success");
        } ,function() {
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

export default Ember.ObjectController.extend(EmailController);
