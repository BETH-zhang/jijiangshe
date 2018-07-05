'use strict'
const moment = require('moment');
const common = require('../../utils/common');
const validator = require('../../utils/validator');
const { Share } = sequelize.models;

exports.postItem = async (ctx) => {
  const error = validator.isEmpty(ctx.request.body, [
    'title',
    'subTitle',
    'cover',
    'masterCeremonies',
    'schedule',
    'address',
    'link'
  ], {
    title: '非空',
    subTitle: '非空',
    cover: '',
    masterCeremonies: '非空',
    schedule: '非空',
    address: '非空',
    link: ''
  });

  if (error) {
    ctx.body = { code: 1, msg: error };
  } else {
    await Share.create(ctx.request.body);
    ctx.data = '添加成功'
  }
}

exports.getList = async (ctx) => {
  const res = await Share.findAll() || [];
  ctx.data = res;
}