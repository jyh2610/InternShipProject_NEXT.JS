"use strict";

const express = require('express');
const router = express.Router();
const signController = require('../controllers/signController');
const {validateToken} = require('../utils/validateToken');

router.post('/signUp', signController.signUp);
router.post('/signIn', signController.signIn);
router.post('/validateToken', validateToken);

module.exports = router;
