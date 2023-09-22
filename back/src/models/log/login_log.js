module.exports = (sequelize, DataTypes) => {
    const LoginLog = sequelize.define('LoginLog', {
      login_log_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: '고유식별값',
      },
      user_no: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'FK 유저번호',
      },
      status_code: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        defaultValue: 1,
        comment: '0: 실패, 1: 성공',
      },
      device_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        comment: 'FK 유저 기기 정보',
      },
      ip: {
        type: DataTypes.STRING(15),
        allowNull: false,
        comment: '접속 ip',
      },
      fail_count: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
      },
      fail_reason: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
        comment: '0: 성공, 1: 패스워드 틀림, 2:네트워크 단절, 3:DB커넥션 유실, 4:기타',
      },
      login_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
        comment: '로그인 시도 시간',
      },
    }, {
      tableName: 'login_log',
      timestamps: false,
    });
  
    LoginLog.associate = (models) => {
      LoginLog.belongsTo(models.Device, { foreignKey: 'device_id' });
      LoginLog.belongsTo(models.User, { foreignKey: 'user_no' });
    };
  
    return LoginLog;
  };
  