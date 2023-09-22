module.exports = (sequelize, DataTypes) => {
    const Device = sequelize.define('Device', {
      device_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        comment: '고유 식별값'
      },
      user_no: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        comment: '유저번호'
      },
      in_use: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        defaultValue: 1,
        comment: '0: 미사용, 1: 사용'
      },
      register_no: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        defaultValue: 1,
        comment: '기기 등록 순번 1~9'
      },
      uuid: {
        type: DataTypes.STRING(36),
        charset: 'utf8mb4',
        collate: 'utf8mb4_0900_ai_ci',
        allowNull: false,
        comment: 'uuid'
      },
      model: {
        type: DataTypes.STRING(30),
        charset: 'utf8mb4',
        collate: 'utf8mb4_0900_ai_ci',
        allowNull: false,
        comment: '기종'
      },
      os_type: {
        type: DataTypes.STRING(10),
        charset: 'utf8mb4',
        collate: 'utf8mb4_0900_ai_ci',
        defaultValue: null,
        comment: 'os 종류'
      },
      od_version: {
        type: DataTypes.STRING(10),
        charset: 'utf8mb4',
        collate: 'utf8mb4_0900_ai_ci',
        defaultValue: null,
        comment: 'os 버전 정보'
      }
    }, {
      tableName: 'device',
      timestamps: false,
      comment: '디바이스 정보'
    });
  
    Device.associate = (models) => {
      Device.belongsTo(models.User, {
        foreignKey: 'user_no',
        onDelete: 'CASCADE'
      });
    };
  
    return Device;
  };
  