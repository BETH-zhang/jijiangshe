const Router = require('koa-router');
const router = new Router();
const collectUserData = require('../../controller/common/collectUserData');

// 测试postgressql数据库的操作
router.get('/users', collectUserData.getUsers)
router.post('/addUser', collectUserData.postUser);

module.exports = router;