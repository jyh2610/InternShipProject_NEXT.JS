// controllers/dormantController.js

const DormantModel = require('../models/dormant/user'); // 실제 모델에 맞게 변경

exports.activate = (req, res) => {
  const token = req.params.token;

  // 예시: 모델을 사용하여 계정 활성화 처리
  DormantModel.activate(token, (err, user) => {
    if (err) {
      return res.status(500).send({ message: 'Internal Server Error' });
    }

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    // 계정 활성화 성공
    res.send({ message: 'Account activated', user });
  });
};
