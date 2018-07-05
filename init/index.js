const path = require('path')
const errors = require('../errors')

// uncaught error handler
process.on('unhandledRejection', (err, promise) => {
  console.log(`unhandledRejection: `, err)
})
process.on('uncaughtException', (err) => {
  console.log(`uncaughtException: `, err)
})

function addGlobalConst(name, value) {
  Object.defineProperty(global, name, {value: value})
}

addGlobalConst('addGlobalConst', addGlobalConst)
addGlobalConst('ROOT_DIR', path.resolve())

class Exception extends Error {
  constructor(code, msg){
    let errMsg, status
    let errCode = code || 1 // 默认 code = 1
    if(errors[errCode]){
      errMsg = msg || errors[code].msg
      status = errors[code].status
    }
    else{
      errMsg = '未知错误'
      status = 500
    }

    super(errMsg)

    this.code = errCode
    this.msg = errMsg
    this.status = status
  }
}

addGlobalConst('Exception', Exception)

addGlobalConst('CFG', require('../config/my'))
addGlobalConst('_', require('lodash'))
addGlobalConst('Promise', require('bluebird'))
addGlobalConst('axios', require('axios'))

// addGlobalConst('Redis', require('ioredis'))
addGlobalConst('Sequelize', require('sequelize'))

const initDb = require('./init-db')
// const initRedis = require('./init-redis')

module.exports = async () => {
  // 请求添加 x-service header
  axios.defaults.headers.common['x-service'] = CFG.serviceName
  // todo code:0 success

  await initDb({checkConnection: true, dbConfig: CFG.db})

  // await initRedis({
  //   checkConnection: true,
  //   clientGlobalName: 'redis',
  //   subscriberGlobalName: 'redisSub',
  //   redisConfig: Object.assign(CFG.redis, {keyPrefix: `${CFG.serviceName}:`})
  // })
}