var Product = DS.Model.extend({

  title: DS.attr('string'),

  description: DS.attr('text'),

  image_url: DS.attr('string'),

  price: DS.attr('decimal')

});

module.exports = Product;

