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
      },
      social_code: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        comment: '1: apple, 2: google, 3: facebook, 4: kakao, 5: naver',
      },
      external_id: {
        type: DataTypes.STRING(64),
        allowNull: false,
        comment: 'oauth_external_id',
      },
      access_token: {
        type: DataTypes.STRING(256),
        allowNull: false,
        comment: 'access_token',
      },
      update_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
        comment: '갱신일자',
      },
    }, {
      tableName: 'social_login',
      timestamps: false,
    });
  
    SocialLogin.associate = (models) => {
      SocialLogin.belongsTo(models.User, { foreignKey: 'user_no' });
    };
  
    return SocialLogin;
  };
  