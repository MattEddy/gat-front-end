import Base from 'ember-validations/validators/base';

export default Base.extend({
  call: function() {
    try {
      var json = JSON.parse(this.model.get(this.property));
    } catch(e) {
      this.errors.pushObject(this.options.message);
    }
  }
});
