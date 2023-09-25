const express = require('express');
const bodyParser = require('body-parser'); // 요청 본문 파싱에 사용
const cors = require('cors'); // Cross-Origin Resource Sharing 미들웨어
const morgan = require('morgan'); // 로깅 미들웨어

const app = express();

// 미들웨어 설정
app.use(cors()); // CORS 허용
app.use(bodyParser.json()); // JSON 형식의 요청 본문을 파싱
app.use(morgan('dev')); // 개발 환경에서 로깅

// 라우터 연결
const authRouter = require('./src/routes/authRouter');
const dormantRouter = require('./src/routes/dormantRouter');
const logRouter = require('./src/routes/logRouter');
const memberRouter = require('./src/routes/memberRouter');
const withdrawalRouter = require('./src/routes/withdrawalRouter');

app.use('/auth', authRouter);
app.use('/dormant', dormantRouter);
app.use('/log', logRouter);
app.use('/member', memberRouter);
app.use('/withdrawal', withdrawalRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
