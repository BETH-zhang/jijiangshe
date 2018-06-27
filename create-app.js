const Koa = require('koa')
const _ = require('lodash')
const path = require('path')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const cors = require('kcors')
const moment = require('moment')

const ROOT_DIR = path.resolve();
module.exports = () => {
  app.proxy = true

  // 第一个中间件，确保所有错误都能捕获
  app.use(async (ctx, next) => {
    try{
      let startTime = new Date()
      ctx.reqId = moment(startTime).format('YYYYMMDD_HHmm_ssSSS') + '-' + _.padStart(_.random(0, 0xffffffff).toString(16), 8, 0)

      await next()
      if(ctx.body === undefined && ctx.data !== undefined){
        ctx.body = {
          reqId: ctx.reqId,
          code: 0,
          data: ctx.data
        }
      }
      let endTime = new Date()
      if(ctx.path !== '/healthCheck'){
        console.log(ctx.method, ctx.path, ctx.status, `- ${endTime - startTime} ms`)
      }
    }
    catch(e){
      console.error(e)
      if(e instanceof Exception){ // 有准备的已知错误
        ctx.status = e.status
        ctx.body = {
          reqId: ctx.reqId,
          code: e.code,
          msg: e.msg
        }
      }
      else{ // 未知错误
        ctx.status = 500
        ctx.body = {
          reqId: ctx.reqId,
          code: 1,
          msg: '未知错误'
        }
      }
      if(process.NODE_ENV !== 'production' && e){
        ctx.body.stack = e.stack // 调用栈返给前端
      }
    }
  })

  app.use(cors({ credentials: true }))
  app.use(bodyParser({formLimit: '2mb'}))
  app.use(require('koa-static')(`${ROOT_DIR}/public`));

  const router = require('./router') // 因为CFG还没准备好，所以要动态加载，不要放在文件顶部
  app.use(router.routes())

  return app
}