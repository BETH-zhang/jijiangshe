const fs = require('fs')

module.exports = async (options) => {
  if(!_.isObject(options)){
    throw new Error('options 参数缺失')
  }
  if(!_.isObject(options.dbConfig)){
    throw new Error('options.dbConfig 参数缺失')
  }

  const dbConfig = options.dbConfig

  const modelDir = `${ROOT_DIR}/model`

  let sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, dbConfig.options)
  const sequelizeData = {};

  // 防止误操作，删除、清空整个库
  sequelize.drop = undefined  // 删除所有的表
  sequelize.truncate = undefined // 清空所有的表
  sequelize.dropAllSchemas = undefined // 删除所有的 postgres schema，即删掉整个数据库
  sequelize.dropSchema = undefined // 删除一个 postgres schema，一般也相当于删掉整个数据库

  addGlobalConst('sequelize', sequelize)
  addGlobalConst('sequelizeData', sequelizeData)

  fs.readdirSync(modelDir).filter(function (file) {
    return file.indexOf('.') !== 0
  }).forEach(function (file) {
    let model = sequelize.import(`${modelDir}/${file}`)
    model.drop = undefined // 以防误删表
    Object.keys(model).forEach(function(key) {
      sequelizeData[key] = model[key];
    });
  })

  Object.keys(sequelize.models).forEach(function (modelName) {
    let model = sequelize.models[modelName]
    if (_.isFunction(model.associate)) {
      model.associate(sequelize.models)
    }
  })

  if(options && options.checkConnection){
    // await sequelize.authenticate()
    await sequelize.sync()
    console.log('DB connected.')
    return Promise.resolve()
  }
  else{
    return Promise.resolve()
  }
}
