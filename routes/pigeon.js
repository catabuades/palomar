const express = require('express');
const router = express.Router();
const pigeonController = require('../controllers/pigeon');

router.get('/:ring', pigeonController.getPigeonByRing);

module.exports = router;