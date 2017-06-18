const CsvDb = require('csv-db');

module.exports = {
  getAll() {
    const csvDb = new CsvDb('data/carts.csv');
    return csvDb.get()
  }
}