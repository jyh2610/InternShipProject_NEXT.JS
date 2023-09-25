// controllers/withdrawalController.js

const WithdrawalModel = require('../models/withdrawal/user'); // 실제 모델에 맞게 변경

exports.requestWithdrawal = (req, res) => {
  const userId = req.params.userId;

  // 예시: 모델을 사용하여 탈퇴 요청 처리
  WithdrawalModel.requestWithdrawal(userId, (err, withdrawalRequest) => {
    if (err) {
      return res.status(500).send({ message: 'Internal Server Error' });
    }

    if (!withdrawalRequest) {
      return res.status(404).send({ message: 'Withdrawal request not found' });
    }

    // 탈퇴 요청 성공
    res.send(withdrawalRequest);
  });
};
