module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('Profile', {
      profile_id: {
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
      nickname: {
        type: DataTypes.STRING(12),
        charset: 'utf8mb4',
        collate: 'utf8mb4_0900_ai_ci',
        defaultValue: null,
        comment: '활동 닉네임'
      },
      image_url: {
        type: DataTypes.STRING(100),
        charset: 'utf8mb4',
        collate: 'utf8mb4_0900_ai_ci',
        defaultValue: null,
        comment: '프로필 사진 url'
      },
      introduction: {
        type: DataTypes.STRING(300),
        charset: 'utf8mb4',
        collate: 'utf8mb4_0900_ai_ci',
        defaultValue: null,
        comment: '자기소개'
      },
      join_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
        comment: '가입일'
      },
      update_date: {
        type: DataTypes.DATE,
        defaultValue: null,
        comment: '정보변경일'
      }
    }, {
      tableName: 'profile',
      timestamps: false,
      comment: '유저 프로필(종종 업데이트)'
    });
  
    Profile.associate = (models) => {
      Profile.belongsTo(models.User, {
        foreignKey: 'user_no',
        onDelete: 'CASCADE'
      });
    };
  
    return Profile;
  };
  