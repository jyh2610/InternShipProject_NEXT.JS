"use strict";

const express = require('express');
const router = express.Router();
const signController = require('../controllers/signController');

router.post('/signUp/:user_name', signController.signUp);
router.post('/signUp/:user_name', signController.signIn);

module.exports = router;
