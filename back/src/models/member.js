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
const getUserName = async(user_no) => {
    return (await member.pool.query(
    `
    SELECT 
        user_name
    FROM 
        user
    WHERE 
        user_no = ?
    `,
    user_no
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
        ?
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
const getProfileByNickname = async(nickname) => {
    return (await member.pool.query(
    `
    SELECT
        *
    FROM
        profile
    WHERE
        nickname = ?
    `,
    nickname))[0][0];
};

// profile 생성
const registerProfile = async(user_no, nickname, name, image_url=null, introduction=null) => {
    return await member.pool.query(
    `
    INSERT INTO profile (
        user_no,
        nickname,
        name,
        image_url,
        introduction
    ) VALUES (
        ?,
        ?,
        ?,
        ?,
        ?
    )
    `,
    [user_no, nickname, name, image_url, introduction]
    );
};
// profile 업데이트
const updateProfile = async(user_no, nickname, name, image_url, introduction) => {
    return await member.pool.query(
    `
    UPDATE profile
    SET
        nickname = ?,
        name =?,
        image_url = ?,
        introduction = ?
    WHERE
        user_no = ?
    `,
    [nickname, name, image_url, introduction, user_no]
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
// Authentication 조회
const getUserNoByEmail = async(email) => {
    return (await member.pool.query(
    `
    SELECT
        user_no
    FROM
        authentication
    WHERE
        email = ?
    `,
    email))[0][0];
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

// refresh_token 조회
const getRefreshToken = async(user_no) => { 
    return (await member.pool.query(
    `
    SELECT
        refresh_token
    FROM
        refresh_token
    WHERE
        user_no = ?
    `,
    user_no))[0][0];
};
// refresh_token 등록
const registerRefreshToken = async(user_no, refresh_token) => {
    return await member.pool.query(
    `
    INSERT INTO refresh_token (
        user_no,
        refresh_token
    ) VALUES (
        ?,
        ?
    )
    `,
    [user_no, refresh_token]
    );
};
// refresh_token 삭제
const deleteRefreshToken = async(user_no) => {
    return await member.pool.query(
    `
    DELETE FROM refresh_token
    WHERE
        user_no = ?
    `,
    [user_no]
    );
};


module.exports = {
    getMember,
    getUserName,
    registerMember,
    deleteMember,

    getProfile,
    getProfileByNickname,
    registerProfile,
    updateProfile,
    deleteProfile,

    getAuthentication,
    getUserNoByEmail,
    registerAuthentication,
    updateAuthentication,
    deleteAuthentication,

    getRefreshToken,
    registerRefreshToken,
    deleteRefreshToken
};

