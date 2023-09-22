// controllers/authController.js

const AuthModel = require('../models/auth/user'); // 실제 모델에 맞게 변경

exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // 예시: 모델을 사용하여 로그인 처리
  AuthModel.login(username, password, (err, user) => {
    if (err) {
      return res.status(500).send({ message: 'Internal Server Error' });
    }

    if (!user) {
      return res.status(401).send({ message: 'Invalid Credentials' });
    }

    // 로그인 성공
    res.send({ message: 'Login successful', user });
  });
};

exports.register = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // 예시: 모델을 사용하여 회원가입 처리
  AuthModel.register(username, password, (err, user) => {
    if (err) {
      return res.status(500).send({ message: 'Internal Server Error' });
    }

    // 회원가입 성공
    res.send({ message: 'Registration successful', user });
  });
};
