module.exports = (sequelize, DataTypes) => {
    const DormantLog = sequelize.define('DormantLog', {
      user_dormant_log_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: '고유식별값',
      },
      user_no: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: '유저 번호',
      },
      status_code: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        comment: '1: 휴면 전환, 2: 휴면복귀',
      },
      log_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
        comment: '로그 발생일',
      },
    }, {
      tableName: 'dormant_log',
      timestamps: false,
    });
  
    return DormantLog;
  };
  