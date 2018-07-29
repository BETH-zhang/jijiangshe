const Router = require('koa-router');
const router = new Router();
const callback = require('../../controller/doc')

router.get('/detail', callback.getDoc);
router.get('/list', callback.getDocs);
router.post('/create', callback.postDoc);
router.post('/delete', callback.deleteDoc);
router.post('/update', callback.updateDoc);
router.post('/delete-md', callback.deleteMarkdown);

module.exports = router;