'use strict'

/**
 * 为方便调试用，作为外网能访问到的回调地址，打印请求信息到日志
 * @param ctx
 * @returns {Promise<void>}
 */
exports.echo = async (ctx) => {
  console.log('-----------------------------')
  console.log(new Date, 'Request arrived')
  console.log(ctx.method, ctx.url)
  console.log('headers', ctx.headers)
  console.log('query', ctx.query)
  console.log('body', ctx.request.body)
  console.log('=============================')
  ctx.data = 'ok'
}
