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
    // save: ->
    //   console.log "handing action"
    //   model = this.get('content')
    //   model.save().then () ->
    //     console.log "waiting"
    //   ,  ->
    //     console.log "Errrors!!!!"

    validateJson: function() {

    }
  },
  errors: function() {
    console.log("here");
    if (this.parseJson(this.get('model.example_data'))) {
      return;
    }
    else {
      return "has-errors";
    }
  }.property('model.example_data')
};

export default Ember.ObjectController.extend(EmailController);
