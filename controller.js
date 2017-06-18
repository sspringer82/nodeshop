const article = require('./models/article');
const cart = require('./models/cart');

module.exports = {
  async list(req, res) {
    cart.createCart(req.session.id)
    try {
      const articles = await article.getAll();
      res.render('list', {articles: articles});
    } catch (e) {
      res.status(500).send(e);
    }
  },

  addToCart(req, res) {
    cart.add(req.session.id, req.body);
    res.send('OK');
  },

  updateCart(req, res) {
    cart.update(req.session.id, req.body);
    res.send('OK');
  },

  async checkout(req, res) {
    const items = await cart.get(req.session.id);
    res.render('checkout', {cart: items});
  },

  async buy(req, res) {
    cart.save(req.session.id);
    res.render('success');
  },

  async orders(req, res) {
    const orders = await cart.getAll();
    res.render('orders', {orders: orders});
  }

}