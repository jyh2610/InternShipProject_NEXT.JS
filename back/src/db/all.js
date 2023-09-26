"use strict";

const auth = require("./auth");
const dormant = require("./dormant");
const log = require("./log");
const member = require("./member");
const withdrawal = require("./withdrawal");

console.log("all DBs are connected");

module.exports = {
    auth,
    dormant,
    log,
    member,
    withdrawal
};