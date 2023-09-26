"use strict";

const {member} = require("../db/all");

const getUserId = async(user_name) => {
    return await member.promise().query(`
    SELECT 
        user_no 
    FROM 
        user
    WHERE 
        user_name = ?
    `,
    [user_name]
    );
};


module.exports = {
    getUserId
};