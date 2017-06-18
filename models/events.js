const CsvDb = require('csv-db');
const events = new CsvDb('data/events.csv');

module.exports = {

  writeEvent(type, sid, payload = '') {
    events.insert({
      event: type,
      time: Date.now(),
      sid: sid,
      payload: payload
    })  
  }

}