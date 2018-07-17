'use strict'
const sortBy = require('lodash/sortBy');
const validator = require('../../utils/validator');
const config = require('../../config/my');
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

exports.getItem = async (ctx) => {
  const sqlName = ctx.request.query.sql;
  const token = ctx.request.query.token;
  if (models[sqlName] && token === config.token) {
    const res = await models[sqlName].find({ where: { id: ctx.request.query.id } });
    ctx.data = res;
  } else {
    ctx.body = { code: 1 }
  }
}

exports.getLists = async (ctx) => {
  const sqlName = ctx.request.query.sql;
  const token = ctx.request.query.token;
  if (models[sqlName] && token === config.token) {
    const res = await models[sqlName].findAll() || [];
    ctx.data = sortBy(res, function(item) { return -item.updatedAt });
  } else {
    ctx.body = { code: 1 }
  }
}

exports.postLists = (ctx) => {
  const sqlName = ctx.request.query.sql;
  const token = ctx.request.query.token;
  if (models[sqlName] && token === config.token) {
    const list = ctx.request.body.data;
    if (list && list.length) {
      let res = null;
      list.forEach(function(item) {
        (async v => {
          try {
            res = await models[sqlName].create(v);
          } catch (e) {
            // something error
          }
        })(item);
      });
      ctx.data = res;
    }
  } else {
    ctx.body = { code: 1 }
  }
}

exports.postItem = async (ctx) => {
  const sqlName = ctx.request.query.sql;
  const token = ctx.request.query.token;
  if (models[sqlName] && token === config.token) {
    const res = await models[sqlName].create(ctx.request.body);
    ctx.data = '添加成功';
  } else {
    ctx.body = { code: 1 }
  }
}

exports.updateItem = async (ctx) => {
  const sqlName = ctx.request.query.sql;
  const token = ctx.request.query.token;
  if (models[sqlName] && token === config.token) {
    const res = await models[sqlName].update(ctx.request.body, {'where':{'id':ctx.request.body.id}});
    if (res) {
      ctx.data = '删除成功';
    }
  } else {
    ctx.body = { code: 1 };
  }
}

exports.deleteItem = async (ctx) => {
  const sqlName = ctx.request.query.sql;
  const token = ctx.request.query.token;
  if (models[sqlName] && token === config.token) {
    const res = await models[sqlName].destroy({'where':{'id':ctx.request.body.id}});
    if (res) {
      ctx.data = '删除成功';
    }
  } else {
    ctx.body = { code: 1 };
  }
}
