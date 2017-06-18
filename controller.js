const article = require('./models/article');
const readCart = require('./models/readCart');
const writeCart = require('./models/writeCart');

module.exports = {
  async list(req, res) {
    writeCart.createCart(req.session.id)
    try {
      const articles = await article.getAll();
      res.render('list', {articles: articles});
    } catch (e) {
      res.status(500).send(e);
    }
  },

  addToCart(req, res) {
    writeCart.add(req.session.id, req.body);
    res.send('OK');
  },

  updateCart(req, res) {
    writeCart.update(req.session.id, req.body);
    res.send('OK');
  },

  async checkout(req, res) {
    const items = await writeCart.get(req.session.id);
    res.render('checkout', {cart: items});
  },

  async buy(req, res) {
    writeCart.save(req.session.id);
    res.render('success');
  },

  async orders(req, res) {
    const orders = await readCart.getAll();
    res.render('orders', {orders: orders});
  }

}