module.exports = {
  allAction(req, res) {
    res.send('A very long list');
  },
  singleAction(req, res) {
    res.send('Only one entry');
  }
}