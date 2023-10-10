"use strict";

const express = require('express');
const router = express.Router();

const signRouter = require("./signRouter");

router.use("/sign", signRouter);

module.exports = router;