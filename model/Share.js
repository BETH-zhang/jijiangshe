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
      get: function()  {
        var masterCeremonies = this.getDataValue('masterCeremonies');
        // sequelize在___get或者set方法中___,可以通过this可以获取或者设置 model实例 的属性;非get或者set方法中,可不行哦(试过)
        return this.getDataValue('title') + ' (' + masterCeremonies + ')';
      },
    },
    subTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    masterCeremonies: {
      type: DataTypes.STRING,
      allowNull: false,
      set: function(val) {
        this.setDataValue('masterCeremonies', val.toUpperCase());
      }
    },
    schedule: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '富海大厦',
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  };

  const Share = sequelize.define('Share', data, {
    tableName: 'share',
  });

  return {
    Share,
    dataShare: data
  };
};