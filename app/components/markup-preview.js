import Ember from "ember";
import markupstuff from '../models/markup-compiler';
var compiler = markupstuff.create();

export default Ember.Component.extend({
  valueObserver: function() {
    return compiler.compile(this.get('markup'), this.get('example_data'));
  }.property('markup')
});

// Ember.computed.alias('markup'),
