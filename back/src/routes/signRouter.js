"use strict";

const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');

router.get('/auth/:user_name', memberController.getUserIDController);
/* 라우팅 설정부분
router.[get post put delete](~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~);
router.[get post put delete](~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~);
router.[get post put delete](~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~); */

module.exports = router;
