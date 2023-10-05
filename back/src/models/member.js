"use strict";

const {member} = require("../db/all");

// member 조회
const getMember = async(user_name) => {
    const result = await member.promise().query(
    `
    SELECT 
        user_no
    FROM 
        user
    WHERE 
        user_name = ?
    `,
    user_name
    );
    return result[0][0];
};
// member 등록
const registerMember = async(user_name, login_type) => {
    return await member.promise().query(
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
// member 업데이트
const updateMember = async(user_no, user_name, login_type) => {
    return await member.promise().query(
    `
    UPDATE user
    SET
        user_name = ?,
        login_type = ?
    WHERE
        user_no = ?
    `,
    [user_name, login_type, user_no]
    );
};
// member 삭제
const deleteMember = async(user_no) => {
    return await member.promise().query(
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
    const result = await member.promise().query(
    `
    SELECT
        *
    FROM
        profile
    WHERE
        user_no = ?
    `,
    user_no);
    return result[0][0];
};
// profile 생성
const registerProfile = async(user_no, nickname, image_url, introdution) => {
    return await member.promise().query(
    `
    INSERT INTO profile (
        user_no,
        nickname,
        image_url,
        introdution
    ) VALUES (
        ?,
        ?,
        ?,
        ?
    )
    `,
    [user_no, nickname, image_url, introdution]
    );
};
// profile 업데이트
const updateProfile = async(user_no, nickname, image_url, introduction) => {
    return await member.promise().query(
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
    return await member.promise().query(
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
    const result = await member.promise.query(
    `
    SELECT
        *
    FROM
        authentication
    WHERE
        user_no = ?
    `,
    user_no);
    return result[0][0];
};
// Authentication 등록
const registerAuthentication = async(user_no, gether_agree, cell_phone, email, birthday, sex, nation) => {
    return await member.promise.query(
    `
    INSERT INTO authentication (
        user_no,
        gather_agree,
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
    return await member.promise().query(
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
    return await member.promise().query(
    `
    DELETE FROM authentication
    WHERE
        user_no = ?
    `,
    [user_no]
    );
};

// // device 조회
// const getDevice = async(user_no) => {
//     const result = await member.promise.query(
//     `
//     SELECT
//         *
//     FROM
//         device
//     WHERE
//         user_no = ?
//     `,
//     user_no);
//     return result[0][0];
// };
// // device 생성
// const registerDevice = async(user_no, in_use, register_no, uuid, model, os_type, os_version) => {
//     return await member.promise.query(
//     `
//     INSERT INTO device (
//         user_no,
//         in_use,
//         register_no,
//         uuid,
//         model,
//         os_type,
//         os_version
//     ) VALUES (
//         ?,
//         ?,
//         ?,
//         ?,
//         ?,
//         ?,
//         ?
//     `,
//     [user_no, in_use, register_no, uuid, model, os_type, os_version]
//     );
// };
// // device 업데이트
// const updateDevice = async(user_no, in_use, register_no, uuid, model, os_type, os_version) => {
//     return await member.promise().query(
//     `
//     UPDATE device
//     SET
//         in_use = ?,
//         register_no = ?,
//         uuid = ?,
//         model = ?,
//         os_type = ?,
//         os_version = ?
//     WHERE
//         user_no = ?
//     `,
//     [in_use, register_no, uuid, model, os_type, os_version, user_no]
//     );
// };
// // device 삭제
// const deleteDevice = async(user_no) => {
//     return await member.promise().query(
//     `
//     DELETE FROM device
//     WHERE
//         user_no = ?
//     `,
//     [user_no]
//     );
// };


module.exports = {
    getMember,
    registerMember,
    updateMember,
    deleteMember,

    getProfile,
    registerProfile,
    updateProfile,
    deleteProfile,

    getAuthentication,
    registerAuthentication,
    updateAuthentication,
    deleteAuthentication,

    // getDevice,
    // registerDevice,
    // updateDevice,
    // deleteDevice
};

