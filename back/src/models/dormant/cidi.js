module.exports = (sequelize, DataTypes) => {
    const Cidi = sequelize.define('Cidi', {
      cidi_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: '고유 식별값',
      },
      user_user_no: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      ci: {
        type: DataTypes.STRING(88),
        defaultValue: null,
        comment: 'ci',
      },
      di: {
        type: DataTypes.STRING(64),
        defaultValue: null,
        comment: 'di',
      },
    }, {
      tableName: 'cidi',
      timestamps: false,
    });
  
    Cidi.associate = (models) => {
      Cidi.belongsTo(models.User, { foreignKey: 'user_user_no' });
    };
  
    return Cidi;
  };
  