// Product model constructor function
function Product(data) {
  this.name = m.prop(data.name);
  this.description = m.prop(data.description);
  this.price = m.prop(data.price);
}

function products() {
  return m.request({method: 'GET', url: 'api/products.json', initialValue: [],
    type: Product,
    unwrapSuccess: function(response) {
      return response.data;
    },
    unwrapError: function(response) {
      return response.errors;
    }
  });
}

module.exports = {
  products: products
};
