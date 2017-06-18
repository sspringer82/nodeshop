const CsvDb = require('csv-db');
const csvDb = new CsvDb('data/articles.csv');

module.exports = {
  getAll() {
    return csvDb.get();
  },
  get(id) {
    return csvDb.get(id);
  }
}