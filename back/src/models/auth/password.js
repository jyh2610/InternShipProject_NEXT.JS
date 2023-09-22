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
        comment: '사용자 번호',
      },
      salt: {
        type: DataTypes.STRING(128),
        charset: 'utf8mb4',
        collate: 'utf8mb4_0900_ai_ci',
        allowNull: false,
        comment: 'hash 값',
      },
      password: {
        type: DataTypes.STRING(128),
        charset: 'utf8mb4',
        collate: 'utf8mb4_0900_ai_ci',
        allowNull: false,
        comment: 'SHA-512 단방향 암호화',
      },
      update_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        comment: '암호변경일',
      },
    }, {
      tableName: 'password',
      timestamps: false,
    });
  
    Password.associate = (models) => {
      Password.belongsTo(models.User, {
        foreignKey: 'user_no',
        targetKey: 'user_no',
      });
    };
  
    return Password;
  };
  