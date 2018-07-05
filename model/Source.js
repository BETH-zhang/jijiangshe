module.exports = (sequelize, DataTypes) => {

  const Source = sequelize.define('Source', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userAgent: {
      type: DataTypes.STRING,
    },
    userIp: {
      type: DataTypes.STRING
    },
    platform: {
      type: DataTypes.STRING,
    }
  }, {
    tableName: 'source',
  });

  return Source;
};