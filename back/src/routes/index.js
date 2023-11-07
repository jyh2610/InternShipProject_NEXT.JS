"use strict";

const express = require('express');
const router = express.Router();

const signRouter = require("./signRouter");
const validateRouter = require("./validateRouter");
const findRouter = require("./findRouter");

router.use("/sign", signRouter);
router.use("/validate", validateRouter);
router.use("/find", findRouter);

module.exports = router;