const express = require('express');
const router = express.Router();

const authRouter = require("./authRouter");
const dormantRouter = require("./dormantRouter");
const logRouter = require("./logRouter");
const memberRouter = require("./memberRouter");
const withdrawalRouter = require("./withdrawalRouter");


router.use("./auth", authRouter.router);
router.use("./dormant", dormantRouter.router);
router.use("./log", logRouter.router);
router.use("./member", memberRouter.router);
router.use("./witjhdrawal", withdrawalRouter.router);

module.exports = router;