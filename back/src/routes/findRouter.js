"use strict";

const express = require('express');
const router = express.Router();
const findController = require('../controllers/findController');

router.post('/idfind', findController.idFind);
router.post('/resetpassword', findController.resetPassword);

module.exports = router;
