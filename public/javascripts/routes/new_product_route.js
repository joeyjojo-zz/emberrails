var product = require('../models/product');

var NewProductRoute = Ember.Route.extend({

  renderTemplate: function() {
    this.render('edit_product', {controller: 'new_product'});
  },

  model: function() {
    return product.createRecord();
  },

  deactivate: function() {
    var model = this.get('controller.model');
    if (!model.get('isSaving')) {
      model.deleteRecord();
    }
  }

});

module.exports = NewProductRoute;

