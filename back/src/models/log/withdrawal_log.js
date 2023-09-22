module.exports = (sequelize, DataTypes) => {
    const WithdrawalLog = sequelize.define('WithdrawalLog', {
      withdrawal_log: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: '고유식별값',
      },
      user_no: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      ci: {
        type: DataTypes.STRING(88),
        allowNull: false,
        comment: '재가입을 통한 혜택 방지',
      },
      status_code: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        comment: '1: 장기 미사용자 (1년), 2: 직접 탈퇴, 3: 부정 사용자, 9: 기타',
      },
      reason_code: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        comment: '1: 장기 미사용자 (1년), 2: 비용, 3: 대체 서비스 사용, 4: 서비스 불만족, 8: 부정으로 인한 운영자 조치, 9: 기타',
      },
      reason_txt: {
        type: DataTypes.TEXT,
        comment: '코드에 따른 탈퇴 내용 기입',
      },
      withdrawal_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
        comment: '탈퇴일',
      },
    }, {
      tableName: 'withdrawal_log',
      timestamps: false,
    });
  
    WithdrawalLog.associate = (models) => {
      WithdrawalLog.belongsTo(models.User, { foreignKey: 'user_no' });
    };
  
    return WithdrawalLog;
  };
  