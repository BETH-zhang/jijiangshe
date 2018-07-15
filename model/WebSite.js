module.exports = (sequelize, DataTypes) => {
  const data = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  };

  const WebSite = sequelize.define('WebSite', data, {
    tableName: 'website',
  });

  return {
    WebSite,
    dataWebSite: data
  };
};