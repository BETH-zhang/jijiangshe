const Router = require('koa-router');
const router = new Router();
const callback = require('../../controller/robot')

router.get('/send', callback.sendNodify);

module.exports = router;

