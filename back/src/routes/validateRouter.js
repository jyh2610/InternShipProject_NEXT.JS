"use strict";

const express = require('express');
const router = express.Router();
const validateController = require('../controllers/validateController');

router.post('/reissuancetoken', validateController.reissuanceAeccessToken);
router.post('/hasid', validateController.hasId);
router.post('/hasnickname', validateController.hasNickname);
// router.post('/signupcheck', validateController.signUpCheck);
router.post('/sendemail', validateController.hasEmail ,validateController.sendEmail);
router.post('/sendemail/tofind', validateController.sendEmail);
router.post('/verifycode', validateController.verifyCode);

module.exports = router;
