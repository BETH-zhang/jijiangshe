const Router = require('koa-router');
const router = new Router();
const statistics = require('../../controller/statistics');

// 测试postgressql数据库的操作
router.get('/log', statistics.createLog);

module.exports = router;