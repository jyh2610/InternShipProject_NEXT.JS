"use strict";

const express = require('express');
const router = express.Router();

const signRouter = require("./signRouter");
const validateRouter = require("./validateRouter");

router.use("/sign", signRouter);
router.use("/validate", validateRouter);

module.exports = router;