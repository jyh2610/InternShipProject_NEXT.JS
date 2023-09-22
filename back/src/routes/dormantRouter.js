const express = require('express');
const router = express.Router();
const dormantController = require('../controllers/dormantController');

router.post('/authenticate', dormantController.authenticate);

module.exports = router;
