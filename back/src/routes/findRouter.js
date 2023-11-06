"use strict";

const express = require('express');
const router = express.Router();
const findController = require('../controllers/findController');

router.post('/idlist', findController.idList);
router.post('/resetpassword', findController.resetPassword);

module.exports = router;
