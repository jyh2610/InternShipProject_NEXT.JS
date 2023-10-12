"use strict";

const verification = require("../db/verification");

// verifying_email 조회
const getVerifying = async(email) => {
    return (await verification.pool.query(
    `
    SELECT 
        *
    FROM 
        verifying_email
    WHERE 
        email = ?
    `,
    email
    ))[0][0];
};
// meverifying_emailmber 등록
const generateVerifying = async(email, code) => {
    return await verification.pool.query(
    `
    INSERT INTO verifying_email (
        email,
        code
    ) VALUES (
        ?,
        ?
    )
    `,
    [email, code]
    );
};
// verifying_email 업데이트는 지원 안 함

// verifying_email 삭제
const deleteVerifying = async(email) => {
    return await verification.pool.query(
    `
    DELETE FROM verifying_email
    WHERE
        email = ?
    `,
    [email]
    );
};



module.exports = {
    getVerifying,
    generateVerifying,
    deleteVerifying,
};

