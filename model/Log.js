module.exports = (sequelize, DataTypes) => {
  const data = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    apMac: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userMac: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pageTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    width: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    colorDepth: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userAgent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };

  const Log = sequelize.define('Log', data, {
    tableName: 'log',
  });

  return {
    Log,
    dataLog: data,
  };
};