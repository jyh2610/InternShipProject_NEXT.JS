// controllers/logController.js

const LogModel = require('../models/log/user_activity'); // 실제 모델에 맞게 변경

exports.getUserActivityLog = (req, res) => {
  const userId = req.params.userId;

  // 예시: 모델을 사용하여 사용자 활동 로그 조회
  LogModel.getUserActivityLog(userId, (err, logs) => {
    if (err) {
      return res.status(500).send({ message: 'Internal Server Error' });
    }

    res.send(logs);
  });
};
