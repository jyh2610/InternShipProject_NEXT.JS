module.exports = (sequelize, DataTypes) => {
    const SocialLogin = sequelize.define('SocialLogin', {
      social_login_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: '고유 식별 값',
      },
      user_no: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: '사용자 번호',
      },
      social_code: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        comment: '1: apple, 2: google, 3: facebook, 4: kakao, 5: naver',
      },
      external_id: {
        type: DataTypes.STRING(64),
        charset: 'utf8mb4',
        collate: 'utf8mb4_0900_ai_ci',
        allowNull: false,
        comment: 'oauth_external_id',
      },
      access_token: {
        type: DataTypes.STRING(256),
        charset: 'utf8mb4',
        collate: 'utf8mb4_0900_ai_ci',
        allowNull: false,
        comment: 'access_token',
      },
      update_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        comment: '갱신일자',
      },
    }, {
      tableName: 'social_login',
      timestamps: false,
    });
  
    SocialLogin.associate = (models) => {
      SocialLogin.belongsTo(models.User, {
        foreignKey: 'user_no',
        targetKey: 'user_no',
      });
    };
  
    return SocialLogin;
  };
  