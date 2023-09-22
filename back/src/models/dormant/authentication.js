module.exports = (sequelize, DataTypes) => {
    const Authentication = sequelize.define('Authentication', {
      authentication: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: '고유 식별값',
      },
      user_no: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      gater_agree: {
        type: DataTypes.TINYINT.UNSIGNED,
        defaultValue: 0,
        comment: '개인정보 수집동의\n0: reject, 1: accept',
      },
      cell_phone: {
        type: DataTypes.STRING(128),
        defaultValue: null,
        comment: '전화번호 (암호화)',
      },
      email: {
        type: DataTypes.STRING(128),
        defaultValue: null,
        comment: '이메일 (암호화)',
      },
      birthday: {
        type: DataTypes.STRING(128),
        defaultValue: null,
        comment: '생년월일 (암호화)',
      },
      sex: {
        type: DataTypes.TINYINT.UNSIGNED,
        defaultValue: null,
        comment: '0: male, 1:female, 2: etc',
      },
      nation: {
        type: DataTypes.TINYINT.UNSIGNED,
        defaultValue: null,
        comment: '0: Korean, 1: foreign',
      },
      auth_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
        comment: '본인인증 날짜',
      },
    }, {
      tableName: 'authentication',
      timestamps: false,
    });
  
    Authentication.associate = (models) => {
      Authentication.belongsTo(models.User, { foreignKey: 'user_no' });
    };
  
    return Authentication;
  };
  