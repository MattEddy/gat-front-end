import Ember from "ember";

var MarkupController = {
  actions: {
    update: function() {
      this.get('markup');
    }
  }
};

export default Ember.Controller.extend(MarkupController);
