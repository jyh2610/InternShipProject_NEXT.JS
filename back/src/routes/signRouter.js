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
router.post('/kakaoLogin', signController.kakaoLogin);
router.post('/naverLogin', signController.naverLogin);
router.post('/googleLogin', signController.googleLogin);
// router.post('/validateToken', validateToken);

module.exports = router;
