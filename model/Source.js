module.exports = (sequelize, DataTypes) => {
  const data = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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

  const Source = sequelize.define('Source', data, {
    tableName: 'source',
  });

  return {
    Source,
    dataSource: data,
  };
};