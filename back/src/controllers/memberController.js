const { getUserId } = require('../models/member');

const getUserIDController = async (req, res) => {
  try {
    const { user_name } = req.params;

    const result = await getUserId(user_name);
    console.log(result);
    
    if (result) {
      const {user_no} = result;
      res.status(200).json({ user_no });
    } else {
      res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '서버 에러' });
  }
};

module.exports = {
  getUserIDController
};

// const { getUserId } = require('../models/services');

// local 회원가입

// local 로그인

// social 부분 아래 추가 예정

// module.exports = {
//   getUserIDController
// };