const Sequelize = require('sequelize');
require('dotenv').config(); // .env 파일을 사용하기 위한 설정

const authConfig = process.env.DATABASE_URL_AUTH;
const dormantConfig = process.env.DATABASE_URL_DORMANT;
const logConfig = process.env.DATABASE_URL_LOG;
const memberConfig = process.env.DATABASE_URL_MEMBER;
const withdrawalConfig = process.env.DATABASE_URL_WITHDRAWAL;

const db = {};

const sequelizeAuth = new Sequelize(authConfig, { dialect: 'mysql' });
const sequelizeDormant = new Sequelize(dormantConfig, { dialect: 'mysql' });
const sequelizeLog = new Sequelize(logConfig, { dialect: 'mysql' });
const sequelizeMember = new Sequelize(memberConfig, { dialect: 'mysql' });
const sequelizeWithdrawal = new Sequelize(withdrawalConfig, { dialect: 'mysql' });

// auth models
fs.readdirSync(__dirname + '/auth')
  .filter(file => {
    return file.indexOf('.') !== 0 && file.slice(-3) === '.js';
  })
  .forEach(file => {
    const model = require(path.join(__dirname + '/auth', file))(sequelizeAuth, Sequelize.DataTypes);
    db[model.name] = model;
  });

// dormant models
fs.readdirSync(__dirname + '/dormant')
  .filter(file => {
    return file.indexOf('.') !== 0 && file.slice(-3) === '.js';
  })
  .forEach(file => {
    const model = require(path.join(__dirname + '/dormant', file))(sequelizeDormant, Sequelize.DataTypes);
    db[model.name] = model;
  });

// log models
fs.readdirSync(__dirname + '/log')
  .filter(file => {
    return file.indexOf('.') !== 0 && file.slice(-3) === '.js';
  })
  .forEach(file => {
    const model = require(path.join(__dirname + '/log', file))(sequelizeLog, Sequelize.DataTypes);
    db[model.name] = model;
  });

// member models
fs.readdirSync(__dirname + '/member')
  .filter(file => {
    return file.indexOf('.') !== 0 && file.slice(-3) === '.js';
  })
  .forEach(file => {
    const model = require(path.join(__dirname + '/member', file))(sequelizeMember, Sequelize.DataTypes);
    db[model.name] = model;
  });

// withdrawal models
fs.readdirSync(__dirname + '/withdrawal')
  .filter(file => {
    return file.indexOf('.') !== 0 && file.slice(-3) === '.js';
  })
  .forEach(file => {
    const model = require(path.join(__dirname + '/withdrawal', file))(sequelizeWithdrawal, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.auth = sequelizeAuth;
db.dormant = sequelizeDormant;
db.log = sequelizeLog;
db.member = sequelizeMember;
db.withdrawal = sequelizeWithdrawal;

module.exports = db;
