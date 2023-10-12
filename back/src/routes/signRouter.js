"use strict";

const express = require('express');
const router = express.Router();
const signController = require('../controllers/signController');
const {validateToken} = require('../utils/validateToken');

router.post('/signup', signController.signUp);
router.post('/signin', signController.signIn);
router.post('/hasid', signController.hasId);
router.post('/sendEmail', signController.sendEmail);
router.post('/verifyCode', signController.verifyCode);
// router.post('/validateToken', validateToken);

module.exports = router;
