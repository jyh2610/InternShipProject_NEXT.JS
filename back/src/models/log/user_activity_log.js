module.exports = (sequelize, DataTypes) => {
    const UserActivityLog = sequelize.define('UserActivityLog', {
      user_activity_log_id: {
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
      table_name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        comment: '변경이 일어난 테이블 명',
      },
      row_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: 'CRUD 작업이 일어난 table의 row id',
      },
      activity_code: {
        type: DataTypes.CHAR(1),
        allowNull: false,
        comment: 'C: 생성, U: 수정, D: 삭제',
      },
      as_is: {
        type: DataTypes.STRING(256),
        allowNull: false,
        comment: '변경전 데이터',
      },
      to_be: {
        type: DataTypes.STRING(256),
        comment: '변경 후 데이터',
      },
      modifier: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
        comment: '1: 유저 본인, 2: 관리자, 3: 기타',
      },
      log_time: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
        comment: '변경 날짜 시간',
      },
    }, {
      tableName: 'user_activity_log',
      timestamps: false,
    });
  
    UserActivityLog.associate = (models) => {
      UserActivityLog.belongsTo(models.User, { foreignKey: 'user_no' });
    };
  
    return UserActivityLog;
  };
  