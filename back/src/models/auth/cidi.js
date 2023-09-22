module.exports = (sequelize, DataTypes) => {
    const Cidi = sequelize.define('Cidi', {
      cidi_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: '고유 식별값',
      },
      user_no: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: '사용자 번호',
      },
      ci: {
        type: DataTypes.STRING(88),
        charset: 'utf8mb4',
        collate: 'utf8mb4_0900_ai_ci',
        comment: 'ci',
      },
      di: {
        type: DataTypes.STRING(64),
        charset: 'utf8mb4',
        collate: 'utf8mb4_0900_ai_ci',
        comment: 'di',
      },
    }, {
      tableName: 'cidi',
      timestamps: false,
    });
  
    Cidi.associate = (models) => {
      Cidi.belongsTo(models.User, {
        foreignKey: 'user_no',
        targetKey: 'user_no',
      });
    };
  
    return Cidi;
  };
  