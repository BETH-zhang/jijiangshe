module.exports = (sequelize, DataTypes) => {
  const data = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        is: /^[0-g]+$/g,
      },
      allowNull: false,
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    }
  };

  const User = sequelize.define('User', data, {
    tableName: 'user',
  });

  return {
    User,
    dataUser: data
  };
};