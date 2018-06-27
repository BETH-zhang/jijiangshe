const Router = require('koa-router')
const router = new Router()
const callback = require('./controller/callback')

router.get('/healthCheck', ctx => {ctx.body = 'ok'})

router.all('/callback/echo', callback.echo)

module.exports = router