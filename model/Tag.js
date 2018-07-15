module.exports = (sequelize, DataTypes) => {
  const data = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };

  const Tag = sequelize.define('Tag', data, {
    tableName: 'tag',
  });

  return {
    Tag,
    dataTag: data
  };
};