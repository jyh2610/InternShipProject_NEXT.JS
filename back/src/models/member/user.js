module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      user_no: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: '회원번호'
      },
      user_name: {
        type: DataTypes.STRING(20),
        charset: 'utf8mb4',
        collate: 'utf8mb4_0900_ai_ci',
        allowNull: false,
        comment: '서비스내에서 사용하는 유저명(ID로 로그인 한다면 실제 ID값)'
      },
      login_type: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
        comment: '0: id-pw, 1: social login'
      }
    }, {
      tableName: 'user',
      timestamps: false,
      comment: '유저 ID 정보 생성 (update X, insert, delete only)'
    });
  
    return User;
  };
  