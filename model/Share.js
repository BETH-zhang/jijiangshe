module.exports = (sequelize, DataTypes) => {

  const Share = sequelize.define('Share', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
    },
    subTitle: {
      type: DataTypes.STRING
    },
    cover: {
      type: DataTypes.STRING,
    },
    masterCeremonies: {
      type: DataTypes.STRING
    },
    schedule: {
      type: DataTypes.INTEGER,
    },
    address: {
      type: DataTypes.STRING
    },
    link: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'share',
  });

  return Share;
};