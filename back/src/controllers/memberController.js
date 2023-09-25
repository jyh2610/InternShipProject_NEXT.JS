// controllers/memberController.js

const MemberModel = require('../models/member/user'); // 실제 모델에 맞게 변경

exports.getUserProfile = (req, res) => {
  const userId = req.params.userId;

  // 예시: 모델을 사용하여 사용자 프로필 조회
  MemberModel.getUserProfile(userId, (err, profile) => {
    if (err) {
      return res.status(500).send({ message: 'Internal Server Error' });
    }

    if (!profile) {
      return res.status(404).send({ message: 'Profile not found' });
    }

    res.send(profile);
  });
};
