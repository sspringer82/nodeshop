const controller = require('./controller');

module.exports = (app) => {
  app.get('/', controller.list);
  app.get('/article', controller.list);

  app.put('/cart', controller.addToCart);
  app.put('/updatecart', controller.updateCart);
  app.get('/checkout', controller.checkout);
  app.get('/buy', controller.buy);
  app.get('/orders', controller.orders);
}