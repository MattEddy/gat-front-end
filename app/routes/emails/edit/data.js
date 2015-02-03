import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render("emails.edit.index");
    this.render("emails.edit.data", {into: 'emails.edit.index', outlet: "data"});
    this.render("emails.edit.markup", {into: 'emails.edit.index', outlet: "markup"});
  },
  beforeModel: function() {
    return this.csrf.fetchToken();
  },
  model: function() {
    return this.store.find('email');
  }
});
