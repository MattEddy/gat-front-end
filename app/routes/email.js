import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    console.log(this.csrf.fetchToken());
    return this.csrf.fetchToken();
  }
});
