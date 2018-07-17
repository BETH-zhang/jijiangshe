const models = sequelize.models;

exports.createLog = async (ctx) => {
  const sqlName = 'Log';
  const query = ctx.request.query;
  if (models[sqlName]) {
    const body = {
      ...query,
      pageTitle: query.title,
      pageUrl: query.url,
      height: query.sh,
      width: query.sw,
      colorDepth: query.cd,
    };
    const res = await models[sqlName].create(body);
    ctx.data = '添加成功';
  } else {
    ctx.body = { code: 1 }
  }
}