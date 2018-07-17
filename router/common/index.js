const Router = require('koa-router');
const router = new Router();
const collectUserData = require('../../controller/common/collectUserData');
const callback = require('../../controller/common/callback')

router.all('/echo', callback.echo)

router.get('/users', collectUserData.getUsers)
router.post('/addUser', collectUserData.postUser);

router.get('/get', callback.getItem);
router.get('/gets', callback.getLists);
router.post('/post', callback.postItem);
router.post('/posts', callback.postLists);
router.post('/delete', callback.deleteItem);
router.post('/update', callback.updateItem);

module.exports = router;