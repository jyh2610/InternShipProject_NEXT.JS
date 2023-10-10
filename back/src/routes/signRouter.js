"use strict";

const express = require('express');
const router = express.Router();
const signController = require('../controllers/signController');

router.post('/signUp', signController.signUp);
router.post('/signIn', signController.signIn);

module.exports = router;
