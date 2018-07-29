'use strict'
const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const moment = require('moment');
const sortBy = require('lodash/sortBy');
const assgin = require('lodash/assign');
const utils = require('../../utils/index');
const config = require('../../config/my');
const models = sequelize.models;
const sqlName = 'Doc';

const writeView = (fileName, content, previewContent, style) => {
  utils.createFolder(utils.getRealPath(fileName));
  fs.writeFileSync(utils.getRealPath(fileName, 'md'), content);
  fs.writeFileSync(utils.getRealPath(fileName), utils.getHtmlTemplate(fileName, previewContent, style));
  return true;
}

const getFileInfo = (fileName, postfix) => {
  const path = utils.getRealPath(fileName, postfix);
  if (fs.existsSync(path)) {
    var data = fs.readFileSync(path, 'utf8');
    return data;
  }
  return null;
}

exports.getDoc = async (ctx) => {
  const token = ctx.request.query.token;
  if (models[sqlName] && token === config.token) {
    const item = await models[sqlName].find({ where: { id: ctx.request.query.id } });
    const content = getFileInfo(item.content, 'md');
    ctx.data = assgin(item, {
      content,
    })
  } else {
    ctx.body = { code: 1 }
  }
}
// fs.unlinkSync

exports.getDocs = async (ctx) => {
  const token = ctx.request.query.token;
  if (models[sqlName] && token === config.token) {
    let res = await models[sqlName].findAll() || [];
    ctx.data = sortBy(res, function(item) { return -item.updatedAt });
  } else {
    ctx.body = { code: 1 }
  }
}

exports.postDoc = async (ctx) => {
  const token = ctx.request.query.token;
  const body = ctx.request.body;
  const fileName = moment().unix();
  if (models[sqlName] && token === config.token) {
    if (!fs.existsSync(utils.getRealPath(fileName))) {
      const writeViewResult = writeView(fileName, body.content, body.previewContent, body.style);
      if (body.preview) {
        ctx.data = { preview: `/view/${fileName}.html` }
      } else if (writeViewResult) {
        const res = await models[sqlName].create(assgin(ctx.request.body, {
          fileName,
          previewContent: null,
        }));
        ctx.data = '添加成功';
			}
    } else {
      ctx.body = { code: 1, msg: '不能重复添加' }
    }
  } else {
    ctx.body = { code: 1, msg: '权限不足' }
  }
}

exports.updateDoc = async (ctx) => {
  const token = ctx.request.query.token;
  if (models[sqlName] && token === config.token) {
    const res = await models[sqlName].update(ctx.request.body, {'where':{'id':ctx.request.body.id}});
    if (res) {
      ctx.data = '更新成功';
    }
  } else {
    ctx.body = { code: 1 };
  }
}

exports.deleteDoc = async (ctx) => {
  const token = ctx.request.query.token;
  if (models[sqlName] && token === config.token) {
    const path = ctx.request.body.path;
    if (fs.existsSync(utils.getRealPath(path))) {
      fs.unlinkSync(utils.getRealPath(path));
      fs.unlinkSync(utils.getRealPath(path, 'md'));
      const res = await models[sqlName].destroy({'where':{'id':ctx.request.body.id}});
      if (res) {
        ctx.data = '删除成功';
      }
    } else {
      ctx.body = { code: 1, data: '该文档已经不存在了' }; 
    }
  } else {
    ctx.body = { code: 1 };
  }
}

exports.deleteMarkdown = async (ctx) => {
  const token = ctx.request.query.token;
  if (models[sqlName] && token === config.token) {
    let res = await models[sqlName].findAll() || [];
    res = res.map(item => (item.fileName))
    const files = fs.readdirSync(path.join('./public/view'));
    console.log(files)
    files.forEach((fileName) => {
      const name = fileName.replace('.html', '').replace('.md', '')
      console.log(name)
      if (res.indexOf(name) === -1) {
        fs.unlinkSync(path.join(`./public/view/${fileName}`));
      }
    });
    ctx.data = '删除成功';
  } else {
    ctx.body = { code: 1 };
  }
}