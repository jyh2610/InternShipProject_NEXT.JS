module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      user_no: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        allowNull: false,
        comment: '회원번호',
      },
      user_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: '서비스내에서 사용하는 유저명(ID로 로그인 한다면 실제 ID값)',
      },
      login_type: {
        type: DataTypes.TINYINT.UNSIGNED,
        defaultValue: 0,
        comment: '0: id-pw, 1: social login',
      },
    }, {
      tableName: 'user',
      timestamps: false,
    });
  
    User.associate = (models) => {
      User.hasOne(models.Authentication, { foreignKey: 'user_no' });
      User.hasOne(models.Password, { foreignKey: 'user_no' });
      User.hasOne(models.Profile, { foreignKey: 'user_no' });
      User.hasOne(models.SocialLogin, { foreignKey: 'user_no' });
    };
  
    return User;
  };
  