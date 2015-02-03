import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render("emails.edit.index");
    this.render("emails.edit.data", {into: 'emails.edit.index', outlet: "someOutlet"});
  },
  beforeModel: function() {
    return this.csrf.fetchToken();
  },
  model: function() {
    return this.store.find('email');
  }
});
