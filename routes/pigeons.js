const express = require('express');
const router = express.Router();
const pigeonsController = require('../controllers/pigeons');

router.get('/', pigeonsController.getAllPigeons);
router.get('/search', pigeonsController.searchByRing);

module.exports = router;