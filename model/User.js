module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING
    },
    userAgent: {
      type: DataTypes.STRING,
    },
    userIp: {
      type: DataTypes.STRING
    },
    platform: {
      type: DataTypes.STRING,
    },
    c: {
      type: DataTypes.STRING,
    }
  }, {
    tableName: 'user',
  });

  return User;
};