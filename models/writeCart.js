const article = require('./article');
const CsvDb = require('csv-db');
const events = require('./events');

module.exports = {
  carts: {},
  createCart(sid) {
    if (!this.carts[sid]) {
      this.carts[sid] = {items: []};
      events.writeEvent('createCart', sid);
    }
  },
  add(sid, item) {
    this.createCart(sid);

    item.amount = parseInt(item.amount);

    events.writeEvent('addItem', sid, JSON.stringify(item));

    const index = this.carts[sid].items.findIndex(el => el.id === item.id);
    if (index > -1) {
      this.carts[sid].items[index].amount += parseInt(item.amount);
    } else {
      this.carts[sid].items.push(item);
    }
  },
  update(sid, item) {
    this.createCart(sid);

    item.amount = parseInt(item.amount);

    const index = this.carts[sid].items.findIndex(el => el.id === item.id);
    if (index > -1 && item.amount > 0) {
      // update
      this.carts[sid].items[index] = item;
      events.writeEvent('updateItem', sid, JSON.stringify(item));
    } else if (index > -1 && item.amount <= 0) {
      // remove
      this.carts[sid].items.splice(index, 1);
      events.writeEvent('removeItem', sid, JSON.stringify(item));
    } else {
      // add
      this.carts[sid].items.push(item);
      events.writeEvent('addItem', sid, JSON.stringify(item));
    }
  },
  get(sid) {
    this.createCart(sid);

    return article.getAll().then((articles) => {
      return this.carts[sid].items.map((item) => {
        const art = articles.find(article => article.id === item.id)
        item.title = art.title;
        return item;
      })
    });
  },
  async save(sid) {
    events.writeEvent('closeCart', sid);
    try {
      const articles = await this.get(sid)
      const csvDb = new CsvDb('data/carts.csv');
      await csvDb.insert({
        sid: sid,
        articles: JSON.stringify(articles)
      })
      delete this.carts[sid];
    } catch (e) {
      console.log(e);
    }
  }
}