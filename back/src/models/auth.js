"use strict";

const auth = require("../db/auth");

// password 조회
const getPassword = async(user_no) => {
    return (await auth.pool.query(
    `
    SELECT
        *
    FROM
        password
    WHERE
        user_no = ?
    `,
    user_no
    ))[0][0];
};
// password 등록
const registerPassword = async(user_no, salt, password) => {
    return await auth.pool.query(
    `
    INSERT INTO password (
        user_no,
        salt,
        password
    ) VALUES (
        ?,
        ?,
        ?
    )
    `,
    [user_no, salt, password]
    );
};

// password 업데이트
const updatePassword = async(user_no, salt, password) => {
    return await auth.pool.query(
    `
    UPDATE password
    SET
        salt = ?,
        password = ?
    WHERE
        user_no = ?
    `,
    [salt, password, user_no]
    );
};
// password 삭제
const deletePassword = async(user_no) => {
    return await auth.pool.query(
    `
    DELETE FROM password
    WHERE
        user_no = ?
    `,
    [user_no]
    );
};

// Social Login 조회
const getSocial_login = async(user_no) => {
    return (await auth.pool.query(
    `
    SELECT
        *
    FROM
        social_login
    WHERE
        user_no = ?
    `,
    user_no
    ))[0][0];
};
// Socail Login 등록
const registerSocial_login = async(user_no, social_code, external_id, access_token) => {
    return await auth.pool.query(
    `
    INSERT INTO social_login(
        user_no,
        social_code,
        external_id,
        access_token
    ) VALUES (
        ?,
        ?,
        ?,
        ?
    )
    `,
    [user_no, social_code, external_id, access_token]
    );
};
// Socail Login 업데이트
const updateSocial_login = async(external_id, access_token) => {
    return await auth.pool.query(
    `
    UPDATE social_login
    SET
        access_token = ?
    WHERE
        external_id = ?
    `,
    [access_token, external_id]
    );
};
// Socail Login 삭제
const deleteSocial_login = async(user_no) => {
    return await auth.pool.query(
    `
    DELETE FROM social_login
    WHERE
        user_no = ?
    `,
    [user_no]
    );
};

// cidi 조회
const getCidi = async(user_no) => {
    return (await auth.pool.query(
    `
    SELECT
        *
    FROM
        cidi
    WHERE
        user_no = ?
    `,
    user_no
    ))[0][0];
};
// cidi 조회
const registerCidi = async(user_no, ci, di) => {
    return await auth.pool.query(
    `
    INSERT INTO cidi(
        user_no,
        ci,
        di
    ) VALUES (
        ?,
        ?,
        ?
    )
    `,
    [user_no, ci, di]
    );
};
// cidi 업데이트
const updateCidi = async(user_no, ci, di) => {
    return await auth.pool.query(
    `
    UPDATE cidi
    SET
        ci = ?,
        di = ?
    WHERE
        user_no = ?
    `,
    [ci, di, user_no]
    );
};
// cidi 삭제
const deleteCidi = async(user_no) => {
    return await auth.pool.query(
    `
    DELETE FROM cidi
    WHERE
        user_no = ?
    `,
    [user_no]
    );
};

module.exports = {
    getPassword,
    registerPassword,
    updatePassword,
    deletePassword,

    getSocial_login,
    registerSocial_login,
    updateSocial_login,
    deleteSocial_login,

    getCidi,
    registerCidi,
    updateCidi,
    deleteCidi
};