var Product = require('../models/product');

var ProductRoute = Ember.Route.extend({

  model: function() {
    return Product.find();
  }

});

module.exports = ProductRoute;

