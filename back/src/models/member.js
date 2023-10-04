"use strict";

const {member} = require("../db/all");

const getUserId = async(user_name) => {
    const result = await member.promise().query(`
    SELECT 
        user_no,
        user_name 
    FROM 
        user
    WHERE 
        user_name = ?
    `,
    [user_name]
    );
    return result[0][0];
};


module.exports = {
    getUserId
};

