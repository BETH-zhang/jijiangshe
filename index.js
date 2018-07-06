const path = require('path')
const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

const ROOT_DIR = path.resolve();
app.use(bodyParser({formLimit: '2mb'}))
app.use(require('koa-static')(`${ROOT_DIR}/dist`));

app.listen(7002)

console.log('请访问: 7002');
