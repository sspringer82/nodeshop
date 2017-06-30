const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/', controller.listAction);
router.get('/:id', controller.detailAction);

module.exports = router;