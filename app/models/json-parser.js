import Ember from 'ember';

export default Ember.Object.extend({
  parse: function(arg) {
    try {
      console.log(arg)
      var json = JSON.parse(arg);
      this.set('success', true);
      console.log("try error");
      return json;
    } catch(e) {
      console.log("catch error");
      this.set('success', false);
    }
  },
  success: true
});
