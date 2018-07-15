module.exports = (sequelize, DataTypes) => {
  const data = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    operation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userAgent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userIp: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  };

  const Log = sequelize.define('Log', data, {
    tableName: 'log',
  });

  return {
    Log,
    dataLog: data,
  };
};