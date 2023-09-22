module.exports = (sequelize, DataTypes) => {
    const Password = sequelize.define('Password', {
      password_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: '고유값',
      },
      user_no: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      salt: {
        type: DataTypes.STRING(128),
        allowNull: false,
        comment: 'hash 값',
      },
      password: {
        type: DataTypes.STRING(128),
        allowNull: false,
        comment: 'SHA-512 단방향 암호화',
      },
      update_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
        comment: '암호변경일',
      },
    }, {
      tableName: 'password',
      timestamps: false,
    });
  
    Password.associate = (models) => {
      Password.belongsTo(models.User, { foreignKey: 'user_no' });
    };
  
    return Password;
  };
  