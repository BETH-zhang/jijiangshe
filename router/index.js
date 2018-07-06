const Router = require('koa-router')
const router = new Router()
const callback = require('../controller/callback')

router.get('/healthCheck', ctx => {ctx.body = 'ok'})

router.all('/callback/echo', callback.echo)

// 用户相关
router.use(
  '/api/common',
  require('./common').routes()
);

// 分享相关
router.use(
  '/api/share',
  require('./share').routes()
);

// 人工智能相关
// 数据可视化相关
// 每周工作记录相关
// 人脸识别相关
// 技能树相关
// 新技术研究相关
// 前端架构相关
// 3D动画相关
// 种子习惯相关
// 用户日志相关
// 书籍整理相关
// 兴趣活动相关

module.exports = router