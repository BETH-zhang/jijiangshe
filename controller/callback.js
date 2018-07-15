'use strict'
const validator = require('../utils/validator');
const models = sequelize.models;

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

exports.getLists = async (ctx) => {
  const sqlName = ctx.request.query.sql;
  if (models[sqlName]) {
    const res = await models[sqlName].findAll() || [];
    ctx.data = res;
  } else {
    ctx.body = { code: 1 }
  }
}

exports.postItem = async (ctx) => {
  const sqlName = ctx.request.query.sql;
  if (models[sqlName]) {
    // let res = await models[sqlName].find({ where: { phone } });
    await models[sqlName].create(ctx.request.body);
    ctx.data = '添加成功';
  } else {
    ctx.body = { code: 1 }
  }
}
