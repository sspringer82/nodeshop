module.exports = {
    listAction(req, res) {
        res.render(require.resolve('./views/list.ejs'));
    },
    detailAction(req, res) {
        res.render(require.resolve('./views/detail.ejs'));
    }
}