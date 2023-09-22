module.exports = (sequelize, DataTypes) => {
    const Subscription = sequelize.define('Subscription', {
      subscription_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: '고유 식별값'
      },
      user_no: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      subscriptioncol: {
        type: DataTypes.TINYINT.UNSIGNED,
        defaultValue: 0,
        comment: '0: freeware(14day), 1: basic, 2: Personal, 3: Proffesional, 4: Enterprise'
      },
      perchase_date: {
        type: DataTypes.DATE,
        defaultValue: null,
        comment: '구매일'
      },
      expriation_date: {
        type: DataTypes.DATE,
        defaultValue: null,
        comment: '만료일'
      }
    }, {
      tableName: 'subscription',
      timestamps: false,
      comment: '구독정보'
    });
  
    Subscription.associate = (models) => {
      Subscription.belongsTo(models.User, {
        foreignKey: 'user_no',
        onDelete: 'CASCADE'
      });
    };
  
    return Subscription;
  };
  