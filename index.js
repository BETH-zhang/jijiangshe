const createApp = require('./create-app')
const CFG = require('./config');

async function start() {
  try {
    console.log('Init success')

    // 一切就绪，最后启动服务
    const app = createApp()
    app.listen(CFG.port)
    console.log(`Listening on port ${CFG.port}`)
  }
  catch (e) {
    console.trace(e)
    process.exit(1)
  }
}

start()