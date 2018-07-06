const Router = require('koa-router');
const router = new Router();
const shareData = require('../../controller/share');

// 测试postgressql数据库的操作
router.get('/list', shareData.getList)
router.post('/create', shareData.postItem);
router.post('/update', shareData.putItem);

module.exports = router;