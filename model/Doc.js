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
    content: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    editorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    tagId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  };

  const Doc = sequelize.define('Doc', data, {
    tableName: 'doc',
  });

  return {
    Doc,
    dataDoc: data
  };
};