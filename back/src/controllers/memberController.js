const { getUserId } = require('../models/member');

const getUserIDController = async (req, res) => {
  try {
    const { user_name } = req.params;

    const result = await getUserId(user_name);
    console.log(result);
    
    if (result && result.length > 0) {
      const user_id = result[0].user_no;
      res.status(200).json({ user_id });
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