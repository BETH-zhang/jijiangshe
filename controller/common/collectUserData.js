'use strict'
const moment = require('moment');
const common = require('../../utils/common');
const { User } = sequelize.models;

/**
 * 添加收集用户表单数据
 * @param ctx
 * @returns {Promise<void>}
 */
exports.postUser = async (ctx) => {
  console.log('-----------------------------', ctx.request.body)
  const name = ctx.request.body.name;
  const phone = ctx.request.body.phone;
  const source = ctx.request.body.source;
  if (!name) {
    ctx.body = { code: 1, msg: '用户名不能为空' };
  } else if (common.isName(name)) {
    ctx.body = { code: 2, msg: '用户名只能是汉字字母或数字' };
  } else if (!phone) {
    ctx.body = { code: 3, msg: '手机号不能为空' };
  } else if (common.isPhone(phone)) {
    ctx.body = { code: 4, msg: '手机号格式不正确' };
  } else {
    console.log('=============================')
    let res = await User.find({ where: { phone } });
    if (res && res.dataValues) {
      ctx.body = { code: 1, msg: '手机号已存在' } 
    } else {
      await User.create({ name, phone, source });
      ctx.data = '恭喜你注册成功';
    }
  }
}

function formatText(item, params) {
  const data = Object.keys(params).map((key) => {
    if (key === 'createdAt') {
      return `${moment(item[key]).format('YYYY-MM-DD HH:mm')}`;
    }
    return `${item[key] || '未填'}`;
  });
  return data.join('  ');
}

exports.getUsers = async (ctx) => {
  const token = ctx.request.query.token;
  let res = await User.findAll() || [];
  let data = [];
  if (res.length && token === 'bethroot') {
    data = res.map((item) => (formatText(item, {
      name: '姓名',
      phone: '手机号',
      createdAt: '时间'
    })))
    ctx.body = data.join('\n');
  } else {
    ctx.data = res;
  }
}
