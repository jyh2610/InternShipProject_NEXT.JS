"use strict";

const member = require("../db/member");

// member 조회
const getMember = async(user_name) => {
    return (await member.pool.query(
    `
    SELECT 
        *
    FROM 
        user
    WHERE 
        user_name = ?
    `,
    user_name
    ))[0][0];
};
// member 등록
const registerMember = async(user_name, login_type) => {
    return await member.pool.query(
    `
    INSERT INTO user (
        user_name,
        login_type
    ) VALUES (
        ?,
        1
    )
    `,
    [user_name, login_type]
    );
};
// member 업데이트는 지원 안 함

// member 삭제
const deleteMember = async(user_no) => {
    return await member.pool.query(
    `
    DELETE FROM user
    WHERE
        user_no = ?
    `,
    [user_no]
    );
};

// profile 조회
const getProfile = async(user_no) => {
    return (await member.pool.query(
    `
    SELECT
        *
    FROM
        profile
    WHERE
        user_no = ?
    `,
    user_no))[0][0];
};
// profile 생성
const registerProfile = async(user_no, nickname, image_url=null, introduction=null) => {
    return await member.pool.query(
    `
    INSERT INTO profile (
        user_no,
        nickname,
        image_url,
        introduction
    ) VALUES (
        ?,
        ?,
        ?,
        ?
    )
    `,
    [user_no, nickname, image_url, introduction]
    );
};
// profile 업데이트
const updateProfile = async(user_no, nickname, image_url, introduction) => {
    return await member.pool.query(
    `
    UPDATE profile
    SET
        nickname = ?,
        image_url = ?,
        introduction = ?
    WHERE
        user_no = ?
    `,
    [nickname, image_url, introduction, user_no]
    );
};
// profile 삭제
const deleteProfile = async(user_no) => {
    return await member.pool.query(
    `
    DELETE FROM profile
    WHERE
        user_no = ?
    `,
    [user_no]
    );
};

// Authentication 조회
const getAuthentication = async(user_no) => {
    return (await member.pool.query(
    `
    SELECT
        *
    FROM
        authentication
    WHERE
        user_no = ?
    `,
    user_no))[0][0];
};
// Authentication 등록
const registerAuthentication = async(user_no, gether_agree, cell_phone, email, birthday, sex, nation) => {
    return await member.pool.query(
    `
    INSERT INTO authentication (
        user_no,
        gether_agree,
        cell_phone,
        email,
        birthday,
        sex,
        nation
    ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
    )
    `,
    [user_no, gether_agree, cell_phone, email, birthday, sex, nation]
    );
};
// Authentication 업데이트
const updateAuthentication = async(user_no, gather_agree, cell_phone, email, birthday, sex, nation) => {
    return await member.pool.query(
    `
    UPDATE authentication
    SET
        gather_agree = ?,
        cell_phone = ?,
        email = ?,
        birthday = ?,
        sex = ?,
        nation = ?
    WHERE
        user_no = ?
    `,
    [gather_agree, cell_phone, email, birthday, sex, nation, user_no]
    );
};
// Authentication 삭제
const deleteAuthentication = async(user_no) => {
    return await member.pool.query(
    `
    DELETE FROM authentication
    WHERE
        user_no = ?
    `,
    [user_no]
    );
};


module.exports = {
    getMember,
    registerMember,
    deleteMember,

    getProfile,
    registerProfile,
    updateProfile,
    deleteProfile,

    getAuthentication,
    registerAuthentication,
    updateAuthentication,
    deleteAuthentication
};

