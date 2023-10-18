"use strict";

const express = require('express');
const router = express.Router();
const signController = require('../controllers/signController');
const {validateToken} = require('../utils/token');

router.post('/signup', signController.signUp);
router.post('/signin', signController.signIn);
router.post('/signout', validateToken, signController.signOut);

router.post('/kakaologin', signController.kakaoLogin);
router.post('/naverlogin', signController.naverLogin);
router.post('/googlelogin', signController.googleLogin);

module.exports = router;
